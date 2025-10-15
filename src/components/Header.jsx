export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-film me-2"></i> MovieHunt
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"

        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 text-center">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Top Rated</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Popular</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Upcoming</a>
            </li>
          </ul>

          <form className="d-flex mt-2 mt-md-0">
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
