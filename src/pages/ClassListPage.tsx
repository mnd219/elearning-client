import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import type { ClassListResponse } from "../features/classes/types/class"
import { getClasses } from "../features/classes/api/centreClassesApi";

function CentreClassListPage() {
    const [data, setData] = useState<ClassListResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        async function fetchClasses() {
            try{
                var result = await getClasses();
                setData(result)
            }catch {
                console.log('failed')
            } finally {
                setLoading(false)
            }
        }
        fetchClasses()
    }, [])
    return <div>
        <h1>ClassListPage</h1>
        <Link to="/classes/123">123</Link><br/>
        <Link to="/classes/ABC">ABC</Link>
    </div>
}

export default CentreClassListPage