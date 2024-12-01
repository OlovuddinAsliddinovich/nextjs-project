import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { SidebarProps } from "./sidebar.props";
import { useRouter } from "next/router";

const Sidebar = ({ latestBlogs, categories }: SidebarProps) => {
  const router = useRouter();
  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box position={"sticky"} top={"100px"} sx={{ transition: "all 0.3s ease" }}>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"5px"} boxShadow={"0px 0px 10px 0px rgba(2,25,255,0.75)"} mt={"20px"}>
          <Typography variant="h5">Latest Blog</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: "20px" }}>
            {latestBlogs.map((item) => (
              <Box key={item.id} marginTop={"20px"}>
                <Box onClick={() => router.push(`/blog/${item.slug}`)} display={"flex"} sx={{ cursor: "pointer" }} gap={"20px"} alignItems={"center"}>
                  <Image src={item.image.url} alt={item.title} width={100} height={100} style={{ objectFit: "cover", borderRadius: "8px" }} />
                  <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Box display={"flex"} gap={"10px"}>
                      <Avatar src={item.author.avatar.url} alt={item.author.name} />
                      <Box>
                        <Typography variant="body2">{item.author.name}</Typography>
                        <Box sx={{ opacity: ".6" }}>{format(new Date(item.createdAt), "dd MMM, yyyy")}</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ width: "100%", borderColor: "gray", mt: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"5px"} boxShadow={"0px 0px 10px 0px rgba(2,2,255,0.75)"}>
          <Typography variant="h5">Category</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: "20px" }}>
            {categories.map((item) => (
              <Fragment key={item.slug}>
                <Button
                  onClick={() => router.push(`/category/${item.slug}`)}
                  sx={{ width: "100%", display: "flex", justifyContent: "flex-start", height: "50px" }}
                >
                  {item.label}
                </Button>
                <Divider sx={{ width: "100%", borderColor: "gray" }} />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
