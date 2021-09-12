import React from "react";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const TodoApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script defer src="/config.js" />
      </Head>
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
