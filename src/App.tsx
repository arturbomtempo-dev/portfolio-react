import { RouterProvider } from 'react-router';
import { router } from './routes/Router';

export function App() {
    return <RouterProvider router={router} />;
}
