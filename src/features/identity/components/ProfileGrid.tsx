import { Dropdown } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

import ProfileCard from "./ProfileCard";
import { useProfileCapacity } from "../hooks/useProfileCapacity";
import { splitProfiles } from "../utils/splitProfiles";
import type { Profile } from "../types/profile";
import "./ProfileGrid.css"

type Props = {
    profiles: Profile[];
    onSelect: (profile: Profile) => void;
};

export default function ProfileGrid({
    profiles,
    onSelect,
}: Props) {
    const capacity = useProfileCapacity();
    const { visible, overflow } = splitProfiles(
        profiles,
        capacity
    );

    const menuItems = overflow.map((profile) => ({
        key: profile.id,
        label: profile.centreName
            ? `${profile.label} - ${profile.centreName}`
            : profile.label,
        onClick: () => onSelect(profile),
    }));

    return (
        <div className="profile-grid">
            {visible.map((profile) => (
                <div className="profile-grid-item" key={profile.id}>
                    <ProfileCard
                        key={profile.id}
                        profile={profile}
                        onSelect={onSelect}
                    />
                </div>
            ))}

            {overflow.length > 0 && (
                <div className="profile-grid-item">
                    <Dropdown
                        menu={{ items: menuItems }}
                        trigger={["click"]}
                    >
                        <button
                            type="button"
                            className="other-profile-card"
                        >
                            <AppstoreOutlined />
                            <span>Other profiles</span>
                            <small>{overflow.length} more</small>
                        </button>
                    </Dropdown>
                </div>
            )}
        </div>
    );
}