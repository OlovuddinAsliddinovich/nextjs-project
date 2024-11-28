import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Box, ButtonGroup, Typography } from "@mui/material";
import { format } from "date-fns";

const Footer = () => {
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ backgroundColor: "primary.main", color: "white" }}
    >
      <Typography>{format(new Date(), "yyyy")} &copy; All rights reserved.</Typography>
      <Box display={"flex"} gap={2} alignItems={"center"} justifyContent={"space-between"}>
        <Telegram sx={{ cursor: "pointer" }} />
        <Instagram sx={{ cursor: "pointer" }} />
        <YouTube sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Footer;
