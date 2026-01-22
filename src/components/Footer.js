import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 It Vedant | Designed by Nilesh</p>

      <div style={styles.icons}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "15px",
    marginTop: "40px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    fontSize: "22px",
    marginTop: "10px",
  },
};

export default Footer;
