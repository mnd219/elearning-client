import { Link } from "react-router-dom"

function HomePage() {
    return (
    <div>
        <h1>HomePage</h1>
        <a href="/classes">
            Classes using anchor
        </a>
        <br />
        <Link to="/classes">
            Classes using Link
        </Link>
    </div>
    )
}

export default HomePage