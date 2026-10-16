import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getMe } from "../api/meApi";
import { buildProfiles } from "../utils/buildProfiles";
import { getSavedProfileId } from "../utils/profileStorage";

import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import {
  restoreProfile,
} from "../store/activeProfileSlice";

export function ProfileBootstrap() {
  const dispatch = useAppDispatch();

  const activeProfile = useAppSelector(
    (state) => state.activeProfile.activeProfile
  );

  const [restored, setRestored] = useState(false);

  const {
    data,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });

  useEffect(() => {
    if (!data) return;

    const profiles = buildProfiles(data);

    const savedId =
      getSavedProfileId(data.contact_id);

    const restoredProfile =
      profiles.find((p) => p.id === savedId) ?? null;

    dispatch(restoreProfile(restoredProfile));

    setRestored(true);
  }, [data, dispatch]);

  if (isError) {
    return <div>Failed to load profile</div>;
  }

  if (isPending || !restored) {
    return <div>Loading...</div>;
  }

  if (!activeProfile) {
    return <Navigate to="/select-profile" replace />;
  }

  return <Outlet />;
}