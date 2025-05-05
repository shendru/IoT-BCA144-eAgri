import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <App /> }]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
