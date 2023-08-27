export default function NavBar() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <button type="button">Home</button> {/*change to image link later? or give button an image instead of text*/}
                </li>
                <li>
                    <button type="button">Log In</button>
                </li>
                <li>
                    <button type="button">Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}