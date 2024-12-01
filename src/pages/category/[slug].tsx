import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Content, Sidebar } from "src/components";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import SEO from "src/layout/seo/seo";
import { BlogsService } from "src/services/blog.service";

const CategoryDetailedPage = ({ blogs, latestBlogs, categories }: CatagoryDetailedPageProps) => {
  const router = useRouter();
  return (
    <SEO metaTitle={`${router.query.slug?.at(0)?.toUpperCase()}${router.query.slug?.slice(1)}-category`}>
      <Layout>
        <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
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
