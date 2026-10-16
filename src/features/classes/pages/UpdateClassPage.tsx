import { useMutation } from "@tanstack/react-query";
import { updateCentreClass } from "../api/centreClassApi";
import type { UpdateClassVariables } from "../types/class"
import { useParams } from "react-router-dom";

function CentreUpdateClass() {
    const {centreId, classId} = useParams()
    const updateMutation = useMutation({
        mutationFn: (variables: UpdateClassVariables) => {
            if (!centreId){
                throw new Error("Centre ID is required")
            }
            const result = updateCentreClass(
                centreId, 
                variables.classId, 
                variables.updatingData
            );
            return result
        }
    });
}