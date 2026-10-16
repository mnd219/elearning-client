import { useParams } from "react-router-dom";
import { useCentre } from "../hooks/useCentre";
import { DetailPageLayout } from "../../../components/DetailPageLayout/DetaiPageLayout";
import { Alert, Button, Card, Descriptions, Table, Tag } from "antd";
import { CENTRE_STATUS_STYLE } from "../types/centre";
import "./CentreSettingsPage.css";
import { useCentreAdmins } from "../hooks/useCentreMembers";
import type { ColumnsType } from "antd/es/table";
import { MEMBER_STATUS_STYLE, type CentreMember } from "../types/centreMember";
import { PlusOutlined } from "@ant-design/icons";
import { CentreAdministratorsSection } from "../components/CentreAdministratorsSection";

export default function CentreSettingsPage() {
    const { centreId } = useParams<{ centreId: string }>();
    const { data, isLoading, isError } = useCentre(centreId || "");
    const {
        data: adminsData,
        isPending: isAdminsPending,
        isError: isAdminsError,
    } = useCentreAdmins(centreId);
    const adminColumns: ColumnsType<CentreMember> = [
        {
            title: "Name",
            key: "name",
            render: (_, member) =>
                `${member.first_name} ${member.last_name}`,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: CentreMember["status"]) => (
                <Tag
                    style={{
                        ...MEMBER_STATUS_STYLE[status],
                        border: "none",
                        fontWeight: "bold",
                    }}
                >
                    {status}
                </Tag>
            ),
        },
    ];
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError || !data) {
        return <div>Error loading data data.</div>;
    }
    return (
        <DetailPageLayout
            title="Manage Centre Information"
            children={
                <div className="centre-settings-sections">
                    <Card
                        title="General Information"
                        className="centre-settings-card"
                    >
                        <Descriptions column={2}>
                            <Descriptions.Item label="Centre Name">
                                {data.name}
                            </Descriptions.Item>

                            <Descriptions.Item label="Centre Code">
                                {data.code}
                            </Descriptions.Item>

                            <Descriptions.Item label="Status">
                                <Tag
                                    style={{
                                        ...CENTRE_STATUS_STYLE[data.status],
                                        border: "none",
                                    }}
                                >
                                    {data.status}
                                </Tag>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>

                    <Card
                        title="Contact & Address"
                        className="centre-settings-card"
                    >
                        <Descriptions column={2}>
                            <Descriptions.Item label="Phone">
                                {data.phone || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="City">
                                {data.city || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="Address Line 1">
                                {data.address_line1 || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="Address Line 2">
                                {data.address_line2 || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="State">
                                {data.state || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="Zip Code">
                                {data.zipcode || "-"}
                            </Descriptions.Item>

                            <Descriptions.Item label="Country">
                                {data.country_code || "-"}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <CentreAdministratorsSection centreId={centreId || ""} />
                </div>
            }
        />
    );
}