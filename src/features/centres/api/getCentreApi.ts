import httpClient from "../../../shared/api/httpClient";
import type { Centre } from "../types/centre";

export async function getCentre(centreId: string): Promise<Centre> {
  const response = await httpClient.get<Centre>(`/centres/${centreId}`);

  return response.data;
}