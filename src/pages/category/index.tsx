import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { CategoriesType } from "src/interfaces/categories.interface";
import Layout from "src/layout/layout";
import { BlogsService } from "src/services/blog.service";

const CategoryPage = ({ categories }: CategoriesPageProps) => {
  const router = useRouter();
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "80%" },
          height: { xs: "30vh", md: "50vh" },
          backgroundColor: "black",
          flexDirection: "column",
          rowGap: "20px",
          borderRadius: "8px",
          mt: "10vh",
          mx: "auto",
        }}
      >
        <Typography variant="h3" color="white" fontFamily={"cursive"} fontStyle={"italic"}>
          All Categories
        </Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {categories.map((item) => (
            <Button onClick={() => router.push(`/category/${item.slug}`)} key={item.slug}>
              # {item.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Layout>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<CategoriesPageProps> = async () => {
  const categories = await BlogsService.getCategories();
  return {
    props: {
      categories,
    },
  };
};

interface CategoriesPageProps {
  categories: CategoriesType[];
}
