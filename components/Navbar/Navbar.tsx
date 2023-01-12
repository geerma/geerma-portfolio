import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "@next/font/google";

import styles from "../../styles/Navbar.module.css";
import { Button, Menu, MenuItem } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState<null | Boolean>(null);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  function detectMob() {
    return ( ( window.innerWidth <= 1050 ));
  }

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  // https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    setIsMobile(detectMob());
    console.log(detectMob());

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width])

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      { isMobile != null && isMobile == false ? (
        <div className={styles.navbuttons}>
          <Link href="/" className={styles.navlink}>
            <h2 className={inter.className}>Home</h2>
          </Link>
          <Link href="/about" className={styles.navlink}>
            <h2 className={inter.className}>About</h2>
          </Link>
          <Link href="/projects" className={styles.navlink}>
            <h2 className={inter.className}>Projects</h2>
          </Link>
          <Link href="/contact" className={styles.navlink}>
            <h2 className={inter.className}>Contact</h2>
          </Link>
        </div>
      ) : (
        <div className={styles.navbuttons}>
          <Button
            variant="outlined"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenu}
          >
            Menu
          </Button>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <a href="/"><MenuItem onClick={handleClose}>Home</MenuItem></a>
            <a href="/about"><MenuItem onClick={handleClose}>About</MenuItem></a>
            <a href="/projects"><MenuItem onClick={handleClose}>Projects</MenuItem></a>
            <a href="/contact"><MenuItem onClick={handleClose}>Contact</MenuItem></a>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
