import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage/error-page";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/step2",
    element: <Step2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/step3",
    element: <Step3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/step4",
    element: <Step4 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/step5",
    element: <Step5 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
