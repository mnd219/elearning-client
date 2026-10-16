import { Card, Divider } from "antd";
import { CurrentAdministratorsTable } from "./CurrentAdministratorsTable";
import { PendingInvitationsTable } from "./PendingInvitationsTable";
import "./CentreAdministratorsSection.css"

type Props = {
  centreId: string;
};

export function CentreAdministratorsSection({ centreId }: Props) {
  return (
    <Card
      title="Centre Administrators"
      className="centre-settings-card"
    >
      <CurrentAdministratorsTable centreId={centreId} />

      <Divider />

      <PendingInvitationsTable centreId={centreId} />
    </Card>
  );
}