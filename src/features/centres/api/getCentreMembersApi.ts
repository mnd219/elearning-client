import httpClient from "../../../shared/api/httpClient";
import type { CentreMembersResponse } from "../types/centreMember";

export async function getCentreAdmins(
  centreId: string
): Promise<CentreMembersResponse> {
  const response = await httpClient.get<CentreMembersResponse>(
    `/centres/${centreId}/members`,
    {
      params: {
        role: "CENTRE_ADMIN",
      },
    }
  );

  return response.data;
}