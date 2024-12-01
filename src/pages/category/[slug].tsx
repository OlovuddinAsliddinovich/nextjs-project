import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";
import { Content, Sidebar } from "src/components";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: CatagoryDetailedPageProps) => {
  return (
    <Layout>
      <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
        <Sidebar latestBlogs={latestBlogs} categories={categories} />
        <Content blogs={blogs} />
      </Box>
    </Layout>
  );
};

export default CategoryDetailedPage;

export const getServerSideProps: GetServerSideProps<CatagoryDetailedPageProps> = async ({ query }) => {
  const blogs = await BlogsService.getDetailedCategory(query.slug as string);
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

interface CatagoryDetailedPageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
