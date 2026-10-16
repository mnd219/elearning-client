export type CentreStatus = "ACTIVE" | "INACTIVE";

export type Centre = {
  id: string;
  name: string;
  code: string;
  phone?: string | null;
  address_line1?: string | null;
  address_line2?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country_code?: string | null;
  status: CentreStatus;
};

export type CentresResponse = {
  items: Centre[];
};

export const CENTRE_STATUS_STYLE = {
  ACTIVE: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
  },
  INACTIVE: {
    backgroundColor: "#F3F4F6",
    color: "#4B5563",
  },
} as const;