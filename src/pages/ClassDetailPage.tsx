import { useParams } from "react-router-dom"

function NotFoundPage() {
    const params = useParams();

    return <div>
        <h1>Class Detail</h1>
        <p>Id: {params.classId}</p>
    </div>
}

export default NotFoundPage