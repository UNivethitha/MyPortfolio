
import { Outlet, Link} from "react-router-dom";
// import "./Layout.css";

 const Layout =() =>{
    return(
    <>
    <section className="Main-header">
    <h3>Nivethitha </h3>
        <div className="navbar">
               
    <nav>
    
   
        <ul>
       
            <li>
                    <Link to="/">Home</Link>
            </li>
            <li>
                    <Link to="/about">About</Link>
            </li>
            <li>
                    <Link to="/blog">Blogs</Link>
            </li>
            <li>
                    <Link to="/skill">Skill</Link>
            </li>
            <li>
                    <Link to="/education">Education</Link>
            </li>
            <li>
                    <Link to="/service">Service</Link>
            </li>
            <li>
                    <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    </div>
    </section>

    {/* ---------------------------------------------------------------------------------------- */}

   
    <Outlet/>
    </>
    )
}
export default Layout