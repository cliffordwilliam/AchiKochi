import { createBrowserRouter } from "react-router-dom";
import Parent from "../pages/Parent";
import CommunePage from "../pages/CommunePage";

const router = createBrowserRouter([
	{
		path: "/homepage",
		element: <Parent />,
	},
	{
		path: "/commune",
		element: <CommunePage />,
	},
]);

export default router;
