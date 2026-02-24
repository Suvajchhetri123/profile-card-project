import style from "./footer.module.css";
function Footer() {
  const date = new Date();
  const copyrightYear = date.getFullYear();

  return <footer className={style.footer}>Copyright {copyrightYear}</footer>;
}

export default Footer;
