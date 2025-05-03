"use client";
import styles from "../../styles/navbar.module.css";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AlbumIcon from "@mui/icons-material/Album";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Link from "next/link";
import Image from "next/image";


const pageObjects = [
  { name: "Library", icon: <VideoLibraryIcon sx={{width:"20px",height:"20"}}/>, path: "/library" },
  { name: "Charts", icon: <ShowChartIcon sx={{width:"20px",height:"20"}}/>, path: "/charts" },
  { name: "Albums", icon: <AlbumIcon sx={{width:"20px",height:"20"}}/>, path: "/albums" },
  { name: "Favorites", icon: <FavoriteBorderIcon sx={{width:"20px",height:"20"}}/>, path: "/favorites" },
  { name: "Trending", icon: <TrendingUpIcon sx={{width:"20px",height:"20"}}/>, path: "/trending" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const authenticated = false; // Set based on user authentication state

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image src="/images/hepi_logo.jpg" height={60} width={60} alt="hepi logo"/>
          </Link>

          {/* Mobile Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {pageObjects.map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Link href={path} className={pathname === path ? styles.navbarButtonActive : ""}>
                    <Typography>{name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageObjects.map(({ name, icon, path }) => {
              const isActive = pathname === path;
              return (
                <Link href={path} key={name} className={isActive ? styles.navbarButtonActive : ""}>
                  <Button onClick={handleCloseNavMenu} className={styles.navbarButton}>
                    <Box className={styles.navbarButtonBox}>
                      {React.cloneElement(icon, {
                        className: isActive ? styles.navbarIconsActive : styles.navbarIcons,
                      })}
                      <Typography className={isActive ? styles.pageLinkActive : styles.pageLink}>{name}</Typography>
                    </Box>
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* User Profile Menu or Login */}
          <Box sx={{ flexGrow: 0 }}>
            {authenticated ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu sx={{ mt: "45px" }} anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box sx={{display:"flex", gap:"5px"}}>
                <Link href="/login">
                  <Button className="callToActionButton">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className="callToActionButton">Signup</Button>
                </Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
