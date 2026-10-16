import httpClient from "../../../shared/api/httpClient";
import type { MeResponse } from "../types/me";

export async function getMe(): Promise<MeResponse> {
  const response = await httpClient.get<MeResponse>("/me");

  return response.data;
}