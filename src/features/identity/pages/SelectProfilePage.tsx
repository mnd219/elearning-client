import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/meApi";
import type { Profile } from "../types/profile";
import { buildProfiles } from "../utils/buildProfiles";
import ProfileGrid from "../components/ProfileGrid";
import "./SelectProfilePage.css"
import { Typography } from "antd";
import { restoreProfile, setActiveProfile } from "../store/activeProfileSlice";
import { useAppDispatch } from "../../../app/hooks/hooks";
import { getSavedProfileId, saveProfileId } from "../utils/profileStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SelectProfilePage() {
    const { data, isPending, isError } = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!data) return;
        const profiles = buildProfiles(data);
        const savedId = getSavedProfileId(data.contact_id);
        const restoredProfile =
            profiles.find((p) => p.id === savedId) ?? null;
        dispatch(restoreProfile(restoredProfile));
    }, [data, dispatch]);

    if (isError || !data) return <div>Failed to load profile</div>;
    const profiles = buildProfiles(data);

    const handleSelect = (profile: Profile) => {
        saveProfileId(data.contact_id, profile.id)
        dispatch(setActiveProfile(profile));
        switch (profile.type) {
            case "SYSTEM_ADMIN":
            navigate("/system-admin/dashboard");
            break;

            case "TEACHER":
            navigate("/teacher/dashboard");
            break;

            case "CENTRE_ADMIN":
            case "CENTRE_STAFF":
            navigate(`/centres/${profile.centreId}/dashboard`);
            break;
        }
    };

    if (isPending) return <div>Loading...</div>;

    return (
        <main className="profile-page">
            <div className="profile-container">
                <div>
                    <Typography.Title className="welcome-title">
                        Welcome, {data.first_name} {data.last_name}
                    </Typography.Title>

                    <Typography.Text type="secondary">
                        Select a profile to continue
                    </Typography.Text>
                </div>

                <ProfileGrid
                    profiles={profiles}
                    onSelect={handleSelect}
                />
            </div>
        </main>
    );
}