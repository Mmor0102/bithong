import React from "react";
import ReactDOM from "react-dom";
import FooterNavBar from "./component/FooterNavBar";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderChatBox from "./component/Chat/HeaderChatBox";
import ChatBox from "./component/Chat/ChatBox";
import ChatList from "./component/Chat/ChatList";
import FooterNavBar from "./component/FooterNavBar";

const NavbarWrapper = () => {
  return (
    <div>
      <Outlet />
      <FooterNavBar />
    </div>
  );
};


ReactDOM.render(
  <ChakraProvider>
    <HeaderChatBox />
    <ChatBox />
    {/* <ChatList /> */}
    <FooterNavBar />
  </ChakraProvider>,
  document.getElementById("root")
);
