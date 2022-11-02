import React from "react";
import "./style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="reserved__rights">
        <p>All rights reserved copyright 2022 &#169;</p>
        <p>
          Designed by{" "}
          <a
            className="fjtechrd__enlace"
            href="https://github.com/FjTechRD"
            target="_blank"
          >
            FjTechRD
          </a>
        </p>
      </div>
      <div className="footer__social">
        <ul className="footer__social-list">
          <li>
            <a target="_blank" href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/francisco-javier-gonz%C3%A1lez-s%C3%A1nchez-b1808324b/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/fjtechnologyrdrd/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
