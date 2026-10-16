import {
  BookOutlined,
  CrownOutlined,
  ReadOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const PROFILE_CONFIG = {
  STUDENT: {
    label: "Student",
    icon: ReadOutlined,
    color: "#2563EB",
  },
  TEACHER: {
    label: "Teacher",
    icon: BookOutlined,
    color: "#059669",
  },
  SYSTEM_ADMIN: {
    label: "System Administrator",
    icon: CrownOutlined,
    color: "#7C3AED",
  },
  CENTRE_ADMIN: {
    label: "Centre Administrator",
    icon: BankOutlined,
    color: "#D97706",
  },
  CENTRE_STAFF: {
    label: "Centre Staff",
    icon: TeamOutlined,
    color: "#DB2777",
  },
};