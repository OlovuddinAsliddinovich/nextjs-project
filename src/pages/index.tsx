import { Button } from "@mui/material";
import React from "react";
import Layout from "src/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Button variant="outlined" sx={{ color: "red" }}>
          Click
        </Button>
      </div>
    </Layout>
  );
};

export default IndexPage;
