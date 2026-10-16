import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks/hooks";

export function SystemAdminGuard() {
    const activeProfile = useAppSelector(
    (state) => state.activeProfile.activeProfile
    );

    if (activeProfile?.type !== "SYSTEM_ADMIN") {
        return <Navigate to="/select-profile" replace />;
    }

    return <Outlet />;
}