import httpClient from "../../../shared/api/httpClient";
import type { ClassListResponse } from "../types/class";

export async function getClasses(
    centreId: string
): Promise<ClassListResponse> {
    const response = await httpClient.get<ClassListResponse>(`centres/${centreId}/classes`)
    return response.data
}