import { useQuery } from "@tanstack/react-query";
import { getCentre } from "../api/getCentreApi";

export function useCentre(centreId: string) {
  return useQuery({
    queryKey: ["centres", centreId],
    queryFn: () => getCentre(centreId),
    enabled: !!centreId,
  });
}