import React from "react";
import { useLocation } from "react-router-dom";

const Card = ({ name, username, email, website, title, body }) => {
  const location = useLocation();
  const {pathname} = location;
  console.log(pathname);
  return (
    {pathname == '/posts' ? (
      <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
    ) : (
      <div className="col">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">Username - {username}</p>
          <p className="card-text">Email - {email}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={`http://www.${website}`}
                className="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )}
  );
};

export default Card;
