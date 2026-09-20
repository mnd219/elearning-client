
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import ClassListPage from "../../pages/ClassListPage";
import ClassDetailPage from "../../pages/ClassDetailPage";
import AppLayout from "../layouts/AppLayout";

export const router = createBrowserRouter([
    {
        path: "/", element: <AppLayout />,
        children: [
            {index: true, element: <HomePage />},
            {path: "*", element: <NotFoundPage />},
            {path: "/classes", element: <ClassListPage />},
            {path: "/classes/:classId", element: <ClassDetailPage />},
        ]
    },
])