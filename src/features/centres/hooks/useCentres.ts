import { useQuery } from "@tanstack/react-query";
import { getCentres } from "../api/getCentreListApi";

export function useCentres() {
  return useQuery({
    queryKey: ["centres"],
    queryFn: getCentres,
  });
}