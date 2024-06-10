import "./NavbarPokeApi.css"
import { Link } from "react-router-dom"

export const NavbarPokeApi= ({}) => {
    return (
    <div>
    <nav className="nav">
        <Link to="/Home">PokeApi</Link>
        <ul>
            <li>
                <Link to="/Home">HomePage</Link>
            </li>
            <li>
                <Link to="Items">Items</Link>
            </li>
        </ul>

    </nav>
    </div>
)
}
export default NavbarPokeApi