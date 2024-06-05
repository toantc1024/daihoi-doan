import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/global/Navbar";
import Media from "./pages/Media";
import Media1 from "./pages/Media1";
import Media2 from "./pages/Media2";
import Footer from "./components/global/Footer";
import Department from "./pages/Department";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import React from "react";
import { Layout, theme } from "antd";
const { Content } = Layout;

const Root = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

const router = // Or use plain objects
  createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "media",
          element: <Media />,
        },
        {
          path: "media1",
          element: <Media1 />,
        },
        {
          path: "media2",
          element: <Media2 />,
        },
        {
          path: "member",
          element: <Department />,
        },
      ],
    },
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
