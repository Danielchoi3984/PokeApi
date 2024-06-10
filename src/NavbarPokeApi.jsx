import "./NavbarPokeApi.css"

export const NavbarPokeApi= ({}) => {
    return (
    <div>
    <nav className="nav">
        <a href="/"className="titulo">Poke Api</a>
        <ul>
            <li>
                <a href="/Home">HomePage</a>
            </li>
            <li>
                <a href="/Items">Items</a>
            </li>
        </ul>

    </nav>
    </div>
)
}
export default NavbarPokeApi