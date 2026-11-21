import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homepage/Homepage';
import App from "./App.tsx";
import LoginPage from "../pages/loginpage/Loginpage.tsx";


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
                path: "/login",
                element: <LoginPage />,
            },
        ]
    },
]);
