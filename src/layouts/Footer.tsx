"use client";

import { NavItems } from "@/data/data";
import "../styles/layouts/footer.scss";
import { smoothScroll } from "@/utils/smoothscroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">

        <div className="footer_top">

          <div className="footer_brand">
            <a href="/" className="footer_logo">
              Aswin.
            </a>

            <p>
              Frontend Developer creating modern,
              responsive, and user-friendly web experiences.
            </p>
          </div>

          <div className="footer_links">
            {NavItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(item.path);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer_socials">
            <a href="https://github.com/dashboard" target="_blank">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/aswin-joseraj-6b9376373/?isSelfProfile=true" target="_blank">
              LinkedIn
            </a>
          </div>

        </div>

        <div className="footer_bottom">
          <p>
            &copy; {new Date().getFullYear()} Aswin Joseraj. All rights reserved.
          </p>

          <a href="#home" onClick={() => smoothScroll("home")}>
            Back to top &#8593;
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;