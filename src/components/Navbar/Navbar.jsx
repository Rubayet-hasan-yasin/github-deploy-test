import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>app</Link>
                </li>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/About'}>About</Link>
                </li><li>
                    <Link to={'/Blog'}>Blog</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;