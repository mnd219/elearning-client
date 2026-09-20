import { Link } from "react-router-dom"

function NotFoundPage() {
    return <div>
        <h1>ClassListPage</h1>
        <Link to="/classes/123">123</Link><br/>
        <Link to="/classes/ABC">ABC</Link>
    </div>
}

export default NotFoundPage