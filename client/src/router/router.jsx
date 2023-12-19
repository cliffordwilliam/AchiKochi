import { createBrowserRouter } from "react-router-dom";
import Parent from "../pages/Parent";
import CommunePage from "../pages/CommunePage";
import MockChatRoom from "../pages/test";

const router = createBrowserRouter([

    {
        path: "/homepage",
        element: <Parent />,
    },
    {
        path: "/commune",
        element: <CommunePage />,
    },
    {
        path: "/test",
        element: <MockChatRoom />,
    },

]);

export default router;
