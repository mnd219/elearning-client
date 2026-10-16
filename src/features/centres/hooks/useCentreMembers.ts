import { useQuery } from "@tanstack/react-query";
import { getCentreAdmins } from "../api/getCentreMembersApi";

export function useCentreAdmins(centreId?: string) {
  return useQuery({
    queryKey: ["centres", centreId, "admins"],
    queryFn: () => getCentreAdmins(centreId!),
    enabled: !!centreId,
  });
}