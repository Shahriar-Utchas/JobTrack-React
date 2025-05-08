import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("companies.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Registration,
            }
        ],
    },
]);