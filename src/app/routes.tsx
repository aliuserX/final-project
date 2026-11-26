import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homepage/Homepage';
import App from "./App.tsx";
import EditMemberPage from "../pages/edit-member-page/EditMemberPage.tsx";


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
                path: '/EditMember',
                element: <EditMemberPage />,
            },

        ]
    },
]);
