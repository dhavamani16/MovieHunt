import { Link } from "react-router-dom";


export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src="https://tse2.mm.bing.net/th/id/OIP.sTrBRa2jgh6VTHRZfyORPgHaGw?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="Movie Poster" />
        <div className="card-body">
          <h5 className="card-title">Movie Title</h5>
          <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur, atque corporis et eius expedita</p>
          <div>
            <Link to="" className="btn btn-sm btn-outline-primary">Read More</Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i>
              7.25| 250 review
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

