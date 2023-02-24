import React from "react";
import ReactDOM from "react-dom";
import FooterNavBar from "./component/FooterNavBar";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderChatBox from "./component/Chat/HeaderChatBox";
import ChatBox from "./component/Chat/ChatBox";
import ChatList from "./component/Chat/ChatList";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const NavbarWrapper = () => {
  return (
    <div>
      <Outlet />
      <FooterNavBar />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <> </>,
      },
      {
        path: "/chat",
        element: <ChatList />,
      },
      {
        path: "/im",
        element: <> </>,
      },
      {
        path: "/chat/chatindex",
        element: <> </>,
      },
      {
        path: "/chatRoom",
        element: <> </>,
      },
    ],
  },
]);




ReactDOM.render(
  <QueryClientProvider client={queryClient}>

  <ChakraProvider>
    <RouterProvider router={router} />
    {/* <HeaderChatBox />
    <ChatBox />
    <ChatList />
    <FooterNavBar /> */}
  </ChakraProvider>,
  </QueryClientProvider>

  ,document.getElementById("root")
);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <RouterProvider router={router} />
//     </ChakraProvider>
//   </React.StrictMode>
// );
