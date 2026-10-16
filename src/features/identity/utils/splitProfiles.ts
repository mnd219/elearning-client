import type { Profile } from "../types/profile";

export function splitProfiles(
  profiles: Profile[],
  capacity: number
) {
  if (profiles.length <= capacity) {
    return {
      visible: profiles,
      overflow: [],
    };
  }

  return {
    visible: profiles.slice(0, capacity - 1),
    overflow: profiles.slice(capacity - 1),
  };
}