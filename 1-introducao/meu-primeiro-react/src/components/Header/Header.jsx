import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.cabecalho}>
        <a className={styles.logo} href="#">Minha
          <span className={styles.logo2}>Empresa</span>
        </a>

        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contatos</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
