import { Box, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Layout from "./components/layout/layout";

export default function App() {
  return (
    <>
      <Box>
        <Layout>
          <Outlet />
        </Layout>
      </Box>
    </>
  );
}
