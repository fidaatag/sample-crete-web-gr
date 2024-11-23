import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ViewCatalog from './pages/ViewCatalog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":catalog" element={<ViewCatalog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
