"use client";

import { NavItems } from "@/data/data"
import "../styles/layouts/nav.scss"
import { smoothScroll } from "@/utils/smoothscroll"
import Link from "next/link"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar_container">
        <Link href="/" className="navbar_logo">
          Aswin<span>.</span>
        </Link>

        <button
          className="navbar_toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={`navbar_menu ${open ? "navbar_menu--open" : ""}`}>
          {NavItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.path}`}
              className="navbar_link"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(item.path);
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar_cta"
            onClick={() => smoothScroll("contact")}
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav;