import httpClient from "../../../shared/api/httpClient";
import type { CentresResponse } from "../types/centre";

export async function getCentres(): Promise<CentresResponse> {
  const response = await httpClient.get<CentresResponse>("/centres");

  return response.data;
}