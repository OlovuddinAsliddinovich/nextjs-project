import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { Content, Hero, Sidebar } from "src/components";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import SEO from "src/layout/seo/seo";
import { BlogsService } from "src/services/blog.service";

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />
        <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
