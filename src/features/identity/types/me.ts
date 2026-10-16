export type CentreMembership = {
  centre_id: string;
  centre_name: string;
  role: "CENTRE_ADMIN" | "CENTRE_STAFF";
};

export type GlobalRole =
  | "SYSTEM_ADMIN"
  | "TEACHER"
  | "STUDENT";

export type MeResponse = {
  contact_id: string;
  first_name: string;
  last_name: string;
  global_roles: GlobalRole[];
  centre_memberships: CentreMembership[];
};