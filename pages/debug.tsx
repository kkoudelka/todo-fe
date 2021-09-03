import React from "react";

const Debug: React.FC = () => {
  return (
    <div>
      <h1>Endpoint root</h1>
      <p>{process.env.NEXT_PUBLIC_ENDPOINT}</p>
    </div>
  );
};

export default Debug;
