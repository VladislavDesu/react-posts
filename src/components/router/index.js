import Posts from "../../pages/Posts";
import PostIdPage from "../../pages/PostIdPage";
import Error from "../../pages/Error";
import Login from "../../pages/Login";

export const privateRoutes = [
    {
        path: "posts",
        components: <Posts/>,
        exact: true
    },
    {
        path: "posts/:id",
        components: <PostIdPage/>,
        exact: true
    },
    {
        path: "*",
        components: <Error/>,
        exact: false
    }
];

export const publicRoutes = [
    {
        path: "login",
        components: <Login/>,
        exact: false
    },
    {
        path: "*",
        components: <Login/>,
        exact: false
    }
];