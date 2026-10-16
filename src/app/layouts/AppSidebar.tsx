import {
  BankOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import { Menu, type MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { getProfileNavigation } from "../../features/identity/config/profileNavigation";
import { useAppSelector } from "../hooks/hooks";

type MenuItem = Required<MenuProps>["items"][number];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeProfile = useAppSelector(
    (state) => state.activeProfile.activeProfile
  );
  const MenuItems: MenuItem[] = activeProfile ? getProfileNavigation(activeProfile) : [];

  if (!MenuItems || MenuItems.length === 0) {
    return null;
  }
  const selectedKey = MenuItems
    .filter((item) => item?.key)
    .map((item) => String(item!.key))
    .filter(
      (key) =>
        location.pathname === key ||
        location.pathname.startsWith(`${key}/`)
    )
    .sort((a, b) => b.length - a.length)[0];
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        E-Learning
      </div>
      <Menu
        selectedKeys={selectedKey ? [selectedKey] : []}
        onClick={({ key }) => navigate(key)}
        mode="inline"
        items={MenuItems}
      />
    </div>
  );
}