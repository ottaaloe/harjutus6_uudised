import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Uudis from './pages/Uudis';
import Contact from './pages/Contact';

const contentful = require('contentful')

export const contentfulClient = contentful.createClient({
  space: 'rqvtjuyw5c5d',
  environment: 'master',
  accessToken: 'g4joSvagET-qS0zuiP0F7q8bIVDdPZgjsO8egehXKfk'
})

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path="uudis/:newsId" element={<Uudis />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;