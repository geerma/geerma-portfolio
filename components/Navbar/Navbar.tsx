import React from "react";
import Link from "next/link";
import { Inter } from "@next/font/google";

import styles from "../../styles/Navbar.module.css";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
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
    </div>
  );
};

export default Navbar;
