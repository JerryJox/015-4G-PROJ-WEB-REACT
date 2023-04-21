import React from "react";
function Navbar(){
  return (<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid px-5">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler fas fa-bars fa-lg text-white"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}
export default Navbar