import { Badge, Button } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";
import HomeIcon from '@mui/icons-material/Home';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="..//public/Logo.png"
            height={80}
          />
        </Link>
        <ul className={styles.categories}>
          <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon color="primary" />} className={styles.button}>Inicio</Button>
          <Button component={Link} to="/category/Motos" color="inherit" className={styles.button}>Motos</Button>
          <Button component={Link} to="/category/Cuatris" color="inherit" className={styles.button}>Cuatris</Button>
          <Button component={Link} to="/category/Indumentaria" color="inherit" className={styles.button}>Indumentaria</Button>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={69} color="primary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
