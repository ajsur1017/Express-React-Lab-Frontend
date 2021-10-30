import { Link } from "react-router-dom";

function Header(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    backgroundColor: "#a9a9a9"
  };

  return (
    <header>
      <h1>Anthony Surace's Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
       
      </nav>
    </header>
  );
}

export default Header;