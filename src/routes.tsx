import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Contents } from './pages/contents';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { ProjectDetails } from './pages/project-details';
import { Projects } from './pages/projects';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
