import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { ContentProps } from "./content.props";

const Content = ({ blogs }: ContentProps) => {
  return (
    <Box width={{ xs: "100%", md: "70%" }}>
      {blogs.map((item) => (
        <Box
          key={item.title}
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(255,255,255,0.1)",
          }}
        >
          <Box position={"relative"} width={"100%"} height={{ xs: "30vh", md: "50vh" }}>
            <Image src={item.image.url} alt={item.title} fill style={{ objectFit: "cover", borderRadius: "8px" }} />
          </Box>
          <Box>
            <Typography variant="h4" marginTop={"30px"}>
              {item.title}
            </Typography>
            <Typography variant="body1" color="gray">
              {item.excerpt}
            </Typography>
            <Divider sx={{ width: "100%", borderColor: "gray", mt: "30px" }} />
            <Box display={"flex"} gap={"10px"} marginTop={"20px"}>
              <Avatar src={item.author.avatar.url} alt={item.author.name} />
              <Box>
                <Typography>{item.author.name}</Typography>
                <Box color={"gray"}>{format(new Date(item.createdAt), "dd MMM, yyyy")} &bull; 5 min read</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
