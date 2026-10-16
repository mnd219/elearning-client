import { useParams } from "react-router-dom"
import { getClasses } from "../api/centreClassesApi";
import { useQuery } from "@tanstack/react-query";

function CentreClassesPage() {
    const { centreId } = useParams();
    const {
        data,
        isPending,
        isError
    } = useQuery({
        queryKey: ["centreClasses", centreId],
        queryFn: () => {
            if (!centreId) {
                throw new Error("Centre ID is required");
            }
            return getClasses(centreId);
        },
        enabled: !!centreId,
        staleTime: 60 * 1000,
    })
    if (isPending) {
        return <p>Loading classes...</p>;
    }
    if (isError) {
        return <p>Failed to load classes.</p>;
    }
    if (data.items.length === 0) {
        return <p>No classes found.</p>;
    }
    return (
        <>
            <h1>Classes</h1>
            {data.items.map((cls) => (
                <div key={cls.id}>
                    {cls.name} / {cls.start_date} / {cls.end_date}
                </div>
            ))}
        </>)
}

export default CentreClassesPage