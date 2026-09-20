import { NavLink, Outlet } from "react-router-dom";
import './AppLayout.css'

function AppLayout() {
    return (
        <main>
            <h1>E-Learning</h1>
            <NavLink to="/">Home</NavLink> | <NavLink to="/classes">Class</NavLink>
            <Outlet />
        </main>
    )
}

export default AppLayout;