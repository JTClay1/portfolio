function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Josh Clay</p>
    </footer>
  );
}

export default Footer;