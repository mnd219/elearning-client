import {
    LogoutOutlined,
    SwapOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Avatar,
    Dropdown,
    Space,
    type MenuProps,
} from "antd";
import { useAppSelector } from "../hooks/hooks";
import { PROFILE_CONFIG } from "../../features/identity/config/profileConfig";
import keycloak from "../../auth/keycloak";
import { removeSavedProfileId } from "../../features/identity/utils/profileStorage";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../features/identity/api/meApi";
import { useNavigate } from "react-router-dom";

export function AppHeader() {
    const { data } = useQuery({
        queryKey: ["me"],
        queryFn: getMe,
    });
    const navigate = useNavigate();
    const handleLogout = () => {
        if (data?.contact_id) {
            removeSavedProfileId(data?.contact_id);
        }
        keycloak.logout();
    }

    const activeProfile = useAppSelector(
        (state) => state.activeProfile.activeProfile
    );

    const profileConfig = activeProfile
        ? PROFILE_CONFIG[activeProfile.type]
        : null;

    const ProfileIcon = profileConfig?.icon;

    const items: MenuProps["items"] = [
        {
            key: "switch-profile",
            icon: <SwapOutlined />,
            label: "Switch Profile",
            onClick: () => {navigate("/select-profile")},
        },
        {
            type: "divider",
        },
        {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "Logout",
            danger: true,
            onClick: handleLogout,
        },
    ];

    return (
        <div className="header-container">
            <div />

            <Dropdown
                menu={{ items }}
                trigger={["click"]}
            >
                <Space className="header-profile">
                    <Avatar icon={ProfileIcon ? <ProfileIcon /> : <UserOutlined />} />

                    <div>
                        <div className="header-user-name">
                            {data? `${data.first_name} ${data.last_name}` : "Unknown User"}
                        </div>

                        <div className="header-profile-role">
                            {profileConfig?.label ?? "Unknown Role"}
                        </div>
                    </div>
                </Space>
            </Dropdown>
        </div>
    );
}