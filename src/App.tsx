import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

export function App() {
    return <RouterProvider router={router} />;
}
