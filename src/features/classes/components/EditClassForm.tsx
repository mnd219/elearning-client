import { useForm } from "react-hook-form";
import type { EditClassFormData, UpdateClassRequest } from "../types/class";
import { useQuery } from "@tanstack/react-query";


export default function EditClassForm() {
    const {
    register,
    handleSubmit,
    reset
    } = useForm<EditClassFormData>();

    const { data: classData} = useQuery(["classes", centreId])

    useEffect(() => {
    if (classData) {
        reset({
            name: classData.name,
            teacher_id: classData.teacher_id,
            course_id: classData.course_id,
            start_date: classData.start_date,
            end_date: classData.end_date,
            });
        }
    }, [classData, reset]);

    const onSubmit = (formData: EditClassFormData) => {
        const request: UpdateClassRequest = {
            ...formData,
            version: currentClass.version
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            type="text"
            {...register("name")}
            />
            <input
            type="text"
            {...register("teacher_id")}
            />
            <input
            type="text"
            {...register("course_id")}
            />
            <input
            type="date"
            {...register("start_date")}
            />
            <input
            type="date"
            {...register("end_date")}
            />
            <button type="submit">
                Save
            </button>
        </form>
    )

}