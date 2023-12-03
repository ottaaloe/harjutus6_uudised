import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Uudis from './pages/Uudis';
import Contact from './pages/Contact';

const path = '/harjutus6_uudised/';
//const path = '/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${path}`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`${path}contact`} element={<Contact />} />
          <Route path={`${path}uudis`} element={<Uudis />} /> 
          {/* <Route path="uudis" element={<Uudis name="Mihkel" />} /> */}
            {/* <Route path=":id" element={<Uudis />} />  */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;