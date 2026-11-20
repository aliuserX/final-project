import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homepage/Homepage';
import NewHomepage from "../pages/new-homepage/NewHomepage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/new",
                element: <NewHomepage />,
            },
        ]
    },
]);
