import { Navigate, Outlet, useParams }
  from "react-router-dom";

import { message } from "antd";
import { useEffect } from "react";

import { useAppSelector } from "../../../app/hooks/hooks";

export function CentreRouteGuard() {
  const { centreId } = useParams();

  const activeProfile =
    useAppSelector(state => state.activeProfile.activeProfile);

  const isCentreProfile =
    activeProfile?.type === "CENTRE_ADMIN" ||
    activeProfile?.type === "CENTRE_STAFF";

  const isValid =
    isCentreProfile &&
    activeProfile.centreId === centreId;

  useEffect(() => {
    if (activeProfile && !isValid) {
      message.error(
        "This page does not belong to your active profile."
      );
    }
  }, [activeProfile, isValid]);

  if (!activeProfile || !isValid) {
    return <Navigate to="/select-profile" replace />;
  }

  return <Outlet />;
}