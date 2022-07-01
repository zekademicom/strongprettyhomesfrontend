import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "alertifyjs/build/css/alertify.min.css";
import "./assets/css/style.css";

// import "react-image-gallery/styles/css/image-gallery.css";

// eslint-disable-next-line
import "swiper/css/bundle";

import { StoreProvider } from "./store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

   <StoreProvider>{/**biz tasidik app ten */}
      <App />
    </StoreProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
