import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navItem } from "src/config/constants";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}

const Navbar = ({ window }: Props) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingX: "20px" }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
          sx={{ my: 2, fontSize: "20px", fontbold: "bold", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}
          onClick={() => router.push("/")}
        >
          <SchoolIcon sx={{ fontSize: "30px" }} /> Blog
        </Box>
        <CloseIcon onClick={handleDrawerToggle} sx={{ cursor: "pointer" }} />
      </Box>
      <Divider />
      <List>
        {navItem.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => router.push(`/${item.route}`)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ height: "9vh", display: "flex" }}>
      <AppBar sx={{ backgroundColor: "#141414", height: "9vh" }} component={"nav"}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={1}
              sx={{ my: 2, fontSize: "20px", fontbold: "bold", fontWeight: "bold", cursor: "pointer", fontFamily: "cursive" }}
              onClick={() => router.push("/")}
            >
              <SchoolIcon sx={{ fontSize: "30px" }} /> Blog
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItem.map((item) => (
              <Button onClick={() => router.push(`/${item.route}`)} key={item.route} sx={{ color: "#fff" }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
