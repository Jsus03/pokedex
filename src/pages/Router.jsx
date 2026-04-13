import { Routes, Route} from 'react-router';
import Layout from "./Layout";
import About from "./About";
import Catalog from "./Catalog";
import Detail from "./Detail";
const RouterDefinition = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Catalog/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/pokemon/:id" element={<Detail />} />
            </Route>
        </Routes>
    );
}

export default RouterDefinition;