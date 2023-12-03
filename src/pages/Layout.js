import { Outlet, Link } from "react-router-dom";
import getGlobalPath from '../global';

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav style={{padding:'10px'}}>
                    <Link to={`${getGlobalPath()}`}>Home</Link> | <Link to={`${getGlobalPath()}contact`} >Kontakt</Link>
                </nav>
                <Outlet />
            </header>
        </div>
    )
};

export default Layout;