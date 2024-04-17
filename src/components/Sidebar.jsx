import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
