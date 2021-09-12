import { GetServerSideProps } from "next";
import React from "react";
import { endpoint } from "../utils/endpoints";

const Debug: React.FC = () => {
  return (
    <div>
      <h1>Endpoint root</h1>
      <p>{endpoint}</p>
    </div>
  );
};

export default Debug;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
