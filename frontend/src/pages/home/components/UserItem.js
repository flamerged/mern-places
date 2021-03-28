import { Link } from "react-router-dom";

import "./userItem.scss";
import Avatar from "../../../components/Avatar";

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="user-item">
      <div className="user-item-content">
        <Link to={`/${id}/places`}>
          <div className="user-item-image">
            <Avatar className={"user-item-avatar"} image={image} alt={name} />
          </div>
          <div className="user-item-info">
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
