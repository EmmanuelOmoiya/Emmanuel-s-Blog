import Footer from "./Footer";
import Navbar from "./Navbar";
import Toast from "./Toast";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}
 
export default Layout;