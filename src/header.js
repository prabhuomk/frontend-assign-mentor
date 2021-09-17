import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="Container">
      <nav className="navbar navbar-expand sticky-top navbar-dark bg-success">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/create" className="nav-link active">
                Create
                <br />
                Mentor/Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/assign" className="nav-link active">
                Assign
                <br />
                Mentor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit" className="nav-link active">
                Edit
                <br />
                Mentor
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
