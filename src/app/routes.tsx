import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homepage/Homepage';
import App from "./App.tsx";
import TeamListPage from "../pages/team-list-page/TeamListPage.tsx";


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
                path: '/teamList',
                element: <TeamListPage />,
            },

        ]
    },
]);
