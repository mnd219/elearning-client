import { Button, Dropdown, Table, Tag } from "antd";
import {
  DownOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { MenuProps, TableColumnsType } from "antd";

import { useCentreAdmins } from "../hooks/useCentreMembers";
import type { CentreMember } from "../types/centreMember";
import { CENTRE_STATUS_STYLE } from "../types/centre";

type Props = {
  centreId: string;
};

const actionItems: MenuProps["items"] = [
  // Để trống business actions hiện tại.
  // Sau này: Activate selected / Deactivate selected / ...
];

export function CurrentAdministratorsTable({ centreId }: Props) {
  const {
    data,
    isPending,
  } = useCentreAdmins(centreId);

  const columns: TableColumnsType<CentreMember> = [
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
      width: 80,
      align: "center",
      render: () => (
        <Button
          type="text"
          icon={<MoreOutlined />}
        />
      ),
    },
  ];

  return (
    <div className="centre-admin-subsection">
      <div className="centre-admin-subsection-header">
        <h3>Current Administrators</h3>

        <Dropdown
          menu={{ items: actionItems }}
          disabled={!actionItems?.length}
        >
          <Button type="primary">
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Table
        rowKey="contact_id"
        columns={columns}
        dataSource={data?.items ?? []}
        loading={isPending}
        pagination={false}
      />
    </div>
  );
}