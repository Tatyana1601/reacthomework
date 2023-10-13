import { NavLink } from "react-router-dom";
const Header = () => {
    return (
    <header className="header">
        <nav>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/posts/:id">Post</NavLink>
        </nav>
          </header>
    )
}
export default Header