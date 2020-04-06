import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__content container ">
        <p>
          Developed by{" "}
          <a href="https://www.michelmoraes.dev" target="_blank" className="link">
            Michel Moraes
          </a>
        </p>
        <p>
          Built with{" "}
          <a href="https://reactjs.org/" className="link">
            React
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
