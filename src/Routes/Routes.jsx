import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CompaniesDetails from "../Pages/CompaniesDetails/CompaniesDetails";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Companies from "../Components/Companies/Companies";
import PrivateRoutes from "./PrivateRoutes";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import MyProfile from "../Pages/Myprofile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("../companies.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Registration,
            },
            {
                path: "companies/:id",
                loader: () => fetch("../companies.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
                // Component: CompaniesDetails
                element: <PrivateRoutes><CompaniesDetails></CompaniesDetails></PrivateRoutes>
            },
            {
                path: "/companies",
                loader: () => fetch("../companies.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
                // Component: Companies,
                element: <PrivateRoutes><Companies></Companies></PrivateRoutes>
            },
            {
                path: "/jobs",
                // Component: AllJobs,
                element: <PrivateRoutes><AllJobs></AllJobs></PrivateRoutes>,
                loader: () => fetch("../companies.json"),
                hydrateFallbackElement: <p>Loading, Please Wait....</p>,
            },
            {
                path: "/reset-password",
                Component: ResetPassword,

            },
            {
                path: "/profile",
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>,
            },
            {
                path: "/update-profile",
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
            },
            
        ],
    },
]);