import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Uudis from './pages/Uudis';
import Contact from './pages/Contact';
import getGlobalPath from './global';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${getGlobalPath()}`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${getGlobalPath()}contact`} element={<Contact />} />
          <Route path={`${getGlobalPath()}uudis`} element={<Uudis />} /> 
          {/* <Route path="uudis" element={<Uudis name="Mihkel" />} /> */}
            {/* <Route path=":id" element={<Uudis />} />  */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;