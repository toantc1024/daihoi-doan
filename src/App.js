import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
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
