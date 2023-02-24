import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Book from "../Pages/Books/Book";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Myclass from "../Pages/MyClass/Myclass";
import About from "../Pages/About/About";
import Profile from "../Pages/StudentPage/Profile/Profile";
import StudentAnalytics from "../Pages/StudentPage/StudentAnalytics/StudentAnalytics";
import LeaderBoars from "../Pages/StudentPage/LeaderBoard/LeaderBoars";
import BookMark from "../Pages/StudentPage/Bookmark/BookMark";
import Login from "../Pages/Form/Login/Login";
import Regestration from "../Pages/Form/Regestration/Regestration";



const router= createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>
            },
            {
                path:"/aboutus",
                element:<About></About>
            },
            {
                path:"/mycourse",
                element:<Myclass></Myclass>
            },
            {
                path:"/books",
                element:<Book></Book>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/studentAnalytics",
                element:<StudentAnalytics></StudentAnalytics>
            },
            {
                path:"/leaderBoard",
                element:<LeaderBoars></LeaderBoars>
            },
           {
            path:"/bookmark",
            element:<BookMark></BookMark>
           },
           {
            path:"/login",
            element:<Login></Login>
           },
           {
            path:"regester",
            element:<Regestration></Regestration>
           }
        ]
    }
])

export default router;