
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import ClassDetailPage from "../../pages/ClassDetailPage";
import AppLayout from "../layouts/AppLayout";
import CentreClassesPage from "../../features/classes/pages/CentreClassesPage";
import SelectProfilePage from "../../features/identity/pages/SelectProfilePage";
import HomePage from "../../pages/HomePage";
import { CentreRouteGuard } from "../../features/identity/guards/CentreGuard";
import { SystemAdminGuard } from "../../features/identity/guards/SystemAdminGuard";
import CentreListPage from "../../features/centres/pages/CentreListPage";
import { ProfileBootstrap } from "../../features/identity/components/ProfileBootstrap";
import { SystemAdminDashboardPage } from "../../features/system_admin/pages/SystemAdminDashboardPage";
import CentreSettingsPage from "../../features/centres/pages/CentreSettingsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                element: <ProfileBootstrap />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    // System Admin routes
                    {
                        path: "/system-admin",
                        element: <SystemAdminGuard />,
                        children: [
                            {
                                path: "dashboard",
                                element: <SystemAdminDashboardPage />,
                            },
                            {
                                path: "centres",
                                element: <CentreListPage />,
                            },
                            {
                                path: "centres/:centreId/settings",
                                element: <CentreSettingsPage />,
                            },
                        ],
                    },

                    // Centre profile routes
                    {
                        path: "centres/:centreId",
                        element: <CentreRouteGuard />,
                        children: [
                            {
                                path: "classes",
                                element: <CentreClassesPage />,
                            },
                            {
                                path: "classes/:classId",
                                element: <ClassDetailPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "/select-profile",
        element: <SelectProfilePage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);