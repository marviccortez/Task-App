import '../App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import TablePage from './pages/TablePage';
import SpacesModal from './pages/SpacesModal';
import ReactHooks from './HookComponent/ReactHooks';
import ReactUseEffectHook from './HookComponent/ReactUseEffectHook';
import ReactUseContext from './HookComponent/ReactUseContextHooks';

function PagesBody() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="table" element={<TablePage />} />
          <Route path="spacesModal" element={<SpacesModal />} />
          <Route path="reactHooks" element={<ReactHooks />} />
          <Route path="reactUseEffectHooks" element={<ReactUseEffectHook />} />
          <Route path="reactUseContextHooks" element={<ReactUseContext />} />
        </Routes>
    );
}

export default PagesBody;