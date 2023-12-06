import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <nav style={{ padding: '10px' }}>
                    <Link to="/">Home</Link> | <Link to="/contact" >Kontakt</Link>
                </nav>
                <Outlet />
            </header>
        </div>
    )
};

export default Layout;