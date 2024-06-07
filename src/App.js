import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/global/Navbar";
import ConfirmPage from "./pages/ConfirmPage";
import Media from "./pages/Media";
import Media2 from "./pages/Media2";
import Footer from "./components/global/Footer";
import Department from "./pages/Department";
import LetterPage from "./pages/LetterPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Layout, theme } from "antd";
import { ToastContainer } from "react-toastify";
import DepartmentPage from "./pages/DepartmentPage";
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
      <ToastContainer />
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
          path: "department/:id",
          // get :id
          element: <DepartmentPage />,
        },
        {
          path: "*",
          element: <HomePage />,
        },
        {
          path: "media",
          element: <Media />,
        },

        {
          path: "document",
          element: <Media2 />,
        },
        {
          path: "member",
          element: <Department />,
        },
        {
          path: "letter",
          element: <LetterPage />,
        },
        {
          path: "confirm",
          element: <ConfirmPage />,
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
