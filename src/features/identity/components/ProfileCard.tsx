import { Card, Typography } from "antd";
import { PROFILE_CONFIG } from "../config/profileConfig";
import type { Profile } from "../types/profile";
import "./ProfileCard.css";
import type { CSSProperties } from "react";

type ProfileCardProps = {
  profile: Profile;
  onSelect: (profile: Profile) => void;
};

export default function ProfileCard({
  profile,
  onSelect,
}: ProfileCardProps) {
  const config = PROFILE_CONFIG[profile.type];
  const Icon = config.icon;

  return (
    <Card
      hoverable
      className="profile-card"
      style={{
        "--profile-color": config.color,
      } as CSSProperties}
      onClick={() => onSelect(profile)}
      styles={{
        body: {
          height: "100%",
          padding: 16,
        },
      }}
    >
      <div className="profile-card-content">
        <Icon
          className="profile-card-icon"
          style={{ color: config.color }}
        />

        <Typography.Title
          level={4}
          className="profile-card-title"
        >
          {config.label}
        </Typography.Title>

        {profile.centreName && (
          <Typography.Text
            type="secondary"
            className="profile-card-centre"
          >
            {profile.centreName}
          </Typography.Text>
        )}
      </div>
    </Card>
  );
}