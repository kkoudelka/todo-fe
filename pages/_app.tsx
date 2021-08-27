import React from "react";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";

const TodoApp = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default TodoApp;
