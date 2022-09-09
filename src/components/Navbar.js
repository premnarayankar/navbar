import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h1>Navbar</h1>
      <nav>
        <ul className={`navbar ${toggle ? "mobile" : "mobile-hide"}`}>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <div className="toggle">
        {!toggle ? (
          <span onClick={() => setToggle(!toggle)}>
            <RiMenu3Line />
          </span>
        ) : (
          <span onClick={() => setToggle(!toggle)}>
            <RiCloseLine />
          </span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
