import { Avatar, Box, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeroProps } from "./hero.props";

const Hero = ({ blogs }: HeroProps) => {
  return (
    <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "#141414" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Box key={item.id}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image src={item.image.url} alt={item.title} fill style={{ objectFit: "cover" }} priority={true} />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                <Box
                  width={{ xs: "100%", md: "70%" }}
                  position={"relative"}
                  color={"white"}
                  sx={{ top: "50%", transform: "translateY(-50%)", paddingLeft: { xs: "10px", md: "50px" } }}
                >
                  <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: { xs: "20px", md: "25px", color: "gray" } }}>{item.excerpt}</Typography>
                  <Box display={"flex"} gap={"10px"} marginTop={"20px"}>
                    <Avatar src={item.author.avatar.url} alt={item.author.name} />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Box>{format(new Date(item.createdAt), "dd MMM, yyyy")} &bull; 5 min read</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
