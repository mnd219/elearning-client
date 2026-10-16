import { Button, Dropdown, Table } from "antd";
import {
  DownOutlined,
  MoreOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type Props = {
  centreId: string;
};

export function PendingInvitationsTable({ centreId }: Props) {
  const actionItems: MenuProps["items"] = [
    {
      key: "invite-admin",
      icon: <UserAddOutlined />,
      label: "Invite Admin",
    },
  ];

  return (
    <div className="centre-admin-subsection">
      <div className="centre-admin-subsection-header">
        <h3>Pending Invitations</h3>

        <Dropdown
          menu={{
            items: actionItems,
            onClick: ({ key }) => {
              if (key === "invite-admin") {
                // TODO: Implement invite admin functionality
              }
            },
          }}
        >
          <Button type="primary">
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Table
        rowKey="id"
        columns={[
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Status",
            dataIndex: "status",
          },
          {
            title: "Expires At",
            dataIndex: "expires_at",
          },
          {
            title: "Action",
            width: 80,
            align: "center",
            render: () => (
              <Button
                type="text"
                icon={<MoreOutlined />}
              />
            ),
          },
        ]}
        dataSource={[]}
        pagination={false}
      />
    </div>
  );
}