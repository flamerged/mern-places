import { Link } from "react-router-dom";

import "./userItem.scss";
import Avatar from "../../../components/Avatar";

const UserItem = ({ id, name, image, placeCount }) => {
  return (
    <li className="user-item">
      <Link to={`/${id}/places`} className="user-item-content">
        <Avatar className={"user-item-avatar"} image={image} alt={name} />
        <div className="user-item-info">
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
