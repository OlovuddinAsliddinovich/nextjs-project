import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Sidebar } from "src/components";
import { calculateEstimatedTimeToRead } from "src/helpers/time.format";
import { BlogsType } from "src/interfaces/blogs.inteface";
import { CategoriesType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import SEO from "src/layout/seo/seo";
import { BlogsService } from "src/services/blog.service";

const DetailedBlogPage = ({ blog, latestBlogs, categories }: DetailedBlogPageProps) => {
  return (
    <SEO metaTitle={`${blog.title}-blog`}>
      <Layout>
        <Box sx={{ display: "flex", gap: "20px", flexDirection: { xs: "column", md: "row" }, padding: "20px" }}>
          <Box width={{ xs: "100%", md: "70%" }}>
            <Box
              sx={{ backgroundColor: "black", padding: "20px", boxShadow: "0px 8px 16px rgba(255,255,255,0.1)" }}
              position={"relative"}
              height={{ xs: "30vh", md: "50vh" }}
              width={"100%"}
            >
              <Image src={blog.image.url} alt={blog.title} fill style={{ objectFit: "cover", borderRadius: "10px" }} />
            </Box>
            <Box display={"flex"} gap={"10px"} marginTop={"40px"}>
              <Avatar src={blog.author.avatar.url} alt={blog.author.name} />
              <Box>
                <Typography>{blog.author.name}</Typography>
                <Box sx={{ opacity: ".6" }}>
                  {format(new Date(blog.createdAt), "dd MMM, yyyy")} &bull; {calculateEstimatedTimeToRead(blog.description.text)} min read
                </Box>
              </Box>
            </Box>
            <Box display={"flex"} rowGap={"20px"} mt="20px" flexDirection={"column"}>
              <Typography variant="h4">{blog.title}</Typography>
              <Typography variant="body1" color="gray">
                {blog.excerpt}
              </Typography>
              <Divider />
              <div style={{ opacity: ".8" }} dangerouslySetInnerHTML={{ __html: blog.description.html }} />
            </Box>
          </Box>
          <Sidebar latestBlogs={latestBlogs} categories={categories} />
        </Box>
      </Layout>
    </SEO>
  );
};

export default DetailedBlogPage;

export const getServerSideProps: GetServerSideProps<DetailedBlogPageProps> = async ({ query }) => {
  const blog = await BlogsService.getDetailedBlog(query.slug as string);
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blog,
      latestBlogs,
      categories,
    },
  };
};

interface DetailedBlogPageProps {
  blog: BlogsType;
  latestBlogs: BlogsType[];
  categories: CategoriesType[];
}
