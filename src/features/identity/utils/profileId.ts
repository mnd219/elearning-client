import type { GlobalProfileType } from "../types/profile";



export function globalProfileId(role: GlobalProfileType) {
  return `global:${role}`;
}

export function centreProfileId(
  centreId: string,
  role: "CENTRE_ADMIN" | "CENTRE_STAFF"
) {
  return `centre:${centreId}:${role}`;
}