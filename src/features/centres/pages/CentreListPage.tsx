import { Alert, Button, Input, Table, Tag, Tooltip } from "antd";
import { PlusOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { CENTRE_STATUS_STYLE, type Centre } from "../types/centre";
import { useNavigate } from "react-router-dom";
import { ListPageLayout } from "../../../components/ListPageLayout/ListPageLayout";
import { useCentres } from "../hooks/useCentres";

export default function CentreListPage() {
    const { data, isPending, isError } = useCentres()
    const navigate = useNavigate();
    const columns: ColumnsType<Centre> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            render: (phone) => phone ?? "-",
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
            render: (city) => city ?? "-",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
            render: (country) => country ?? "-",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: Centre["status"]) => (
                <Tag style={{
                    ...CENTRE_STATUS_STYLE[status],
                    border: "none",
                    fontWeight: "bold",
                }}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            width: 80,
            render: (_, centre: Centre) => (
                <Tooltip title="Centre Settings">
                    <Button
                        type="link"
                        icon={<SettingOutlined />}
                        onClick={() =>
                            navigate(`/system-admin/centres/${centre.id}/settings`)
                        }
                    />
                </Tooltip>
            ),
        },
    ];

    if (isPending) return <div>Loading...</div>;

    if (isError) {
        return (
            <Alert
                type="error"
                title="Failed to load centres"
            />
        );
    }
    return (
        <ListPageLayout
            title="Manage Centres"
            search={
                <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search centres..."
                    style={{ width: 320 }}
                />
            }
            action={
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                >
                    Add New Centre
                </Button>
            }
        >
            <Table
                rowKey="id"
                columns={columns}
                dataSource={data?.items ?? []}
                loading={isPending}
                pagination={false}
            />
        </ListPageLayout>
    );
}