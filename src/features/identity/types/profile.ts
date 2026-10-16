export type ProfileType =
  | "STUDENT"
  | "TEACHER"
  | "SYSTEM_ADMIN"
  | "CENTRE_ADMIN"
  | "CENTRE_STAFF";

export type GlobalProfileType =
  | "STUDENT"
  | "TEACHER"
  | "SYSTEM_ADMIN"

export type Profile = {
  id: string;
  type: ProfileType;
  label: string;
  centreId?: string;
  centreName?: string;
};