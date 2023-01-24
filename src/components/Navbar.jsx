import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border border-light rounded-3 ">
      <div className="container-fluid">
        {/* Nav Title */}
        <a
          className="navbar-brand text-primary-emphasis fw-bold fs-3 text-uppercase"
          href="/"
        >
          ToDo List
        </a>
      </div>
    </nav>
  );
}
