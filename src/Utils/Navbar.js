
function Navbar(props) {
    return (
      <nav
        className="navbar navbar-dark navbar-expand-lg fixed-top"
        style={{ backgroundColor: "#3c487c" }}
      >
        <span className="navbar-brand">
          User Data
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;