import httpClient from "../../../shared/api/httpClient"
import type { ClassResponse, UpdateClassRequest } from "../types/class"


export async function updateCentreClass(
    centreId: string,
    classId: string,
    updatingData: UpdateClassRequest,
): Promise<ClassResponse> {
    const response = await httpClient.patch(`/centres/${centreId}/classes/${classId}`, updatingData)
    return response.data
}