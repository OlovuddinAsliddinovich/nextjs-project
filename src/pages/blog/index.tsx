import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content } from "src/components";
import { BlogsType } from "src/interfaces/blogs.inteface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";

const BlogPage = ({ blogs }: BlogPageProps) => {
  return (
    <Layout>
      <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", padding: "20px" }}>
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};

interface BlogPageProps {
  blogs: BlogsType[];
}
