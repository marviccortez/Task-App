import '../App.css';
import { Routes, Route } from "react-router-dom";
import SpacesModal from './ASSMNT3/SpacesModal';
import ReactUseEffectHook from './ASSMNT1/ReactUseEffectHook';
import ReactUseContext from './ASSMNT2/ReactUseContextHooks';

function PagesBody() {
    return (
        <Routes>
          <Route path="/" element={<SpacesModal />} />
          <Route path="reactUseEffectHooks" element={<ReactUseEffectHook />} />
          <Route path="reactUseContextHooks" element={<ReactUseContext />} />
        </Routes>
    );
}

export default PagesBody;