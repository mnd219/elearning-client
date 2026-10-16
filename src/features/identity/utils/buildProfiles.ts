import type { MeResponse } from "../types/me";
import type { Profile } from "../types/profile";
import { centreProfileId, globalProfileId } from "./profileId";

const ROLE_ORDER = [
  "STUDENT",
  "TEACHER",
  "SYSTEM_ADMIN",
] as const;

export function buildProfiles(me: MeResponse): Profile[] {
  const globalProfiles: Profile[] = ROLE_ORDER
    .filter((role) => me.global_roles.includes(role))
    .map((role) => ({
      id: globalProfileId(role),
      type: role,
      label: role,
    }));
  const centreProfiles: Profile[] = me.centre_memberships.map((cm) => ({
      id: centreProfileId(cm.centre_id, cm.role),
      type: cm.role,
      label: cm.role,
      centreNumber: cm.centre_id,
      centreName: cm.centre_name
  }));
  return [...globalProfiles, ...centreProfiles];
}