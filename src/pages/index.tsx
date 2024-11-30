import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "src/components";
import { BlogsType } from "src/interfaces/blogs.inteface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";

const IndexPage = ({ blogs }: HomePageProps) => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
}
