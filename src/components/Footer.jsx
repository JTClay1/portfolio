function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <p>&copy; {currentYear} Josh Clay</p>

        <p className="site-footer__status">
          <span aria-hidden="true" />
          portfolio_status: online
        </p>

        <p>
          Best viewed on any reasonably modern device with JavaScript enabled.
        </p>
      </div>
    </footer>
  );
}

export default Footer;