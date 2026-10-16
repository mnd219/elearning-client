import {
  BankOutlined,
  BookOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import type { Profile } from "../types/profile";

type MenuItem = Required<MenuProps>["items"][number];

export function getProfileNavigation(
  profile: Profile
): MenuItem[] {
  switch (profile.type) {
    case "SYSTEM_ADMIN":
      return [
        {
          key: "/system-admin/dashboard",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: "/system-admin/centres",
          icon: <BankOutlined />,
          label: "Centres",
        },
      ];

    case "TEACHER":
      return [
        {
          key: "/teacher/dashboard",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: "/teacher/classes",
          icon: <BookOutlined />,
          label: "My Classes",
        },
      ];

    case "CENTRE_ADMIN":
      return [
        {
          key: `/centres/${profile.centreId}/dashboard`,
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: `/centres/${profile.centreId}/classes`,
          icon: <BookOutlined />,
          label: "Classes",
        },
        {
          key: `/centres/${profile.centreId}/staff`,
          icon: <TeamOutlined />,
          label: "Staff",
        },
      ];

    case "CENTRE_STAFF":
      return [
        {
          key: `/centres/${profile.centreId}/dashboard`,
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: `/centres/${profile.centreId}/classes`,
          icon: <BookOutlined />,
          label: "Classes",
        },
      ];

    case "STUDENT":
      return [
        {
          key: "/student/dashboard",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
      ];

    default:
      return [];
  }
}