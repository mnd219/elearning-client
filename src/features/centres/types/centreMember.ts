export type CentreMember = {
  centre_id: string;
  contact_id: string;
  role: "CENTRE_ADMIN" | "CENTRE_STAFF";
  status: "ACTIVE" | "INACTIVE";
  first_name: string;
  last_name: string;
  email: string;
};

export type CentreMembersResponse = {
  items: CentreMember[];
  next_cursor: string | null;
  has_more: boolean;
};

export const MEMBER_STATUS_STYLE = {
  ACTIVE: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },
  INACTIVE: {
    backgroundColor: "#F3F4F6",
    color: "#4B5563",
  },
} as const;