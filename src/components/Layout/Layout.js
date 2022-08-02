import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MobileMenu from '../Navbar/MobileMenu/MobileMenu';

const Layout = () => {
    return ( 
        <div>
            <MobileMenu />
            <Navbar/>
                <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;