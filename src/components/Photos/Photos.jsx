import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Photos.css"

function Photos({ id, url }) {
  return (
    <>
      <Link to={`/gallery/${id}`}>
        <div>
          <img src={url} alt={`Photo ${id}`} />
        </div>
      </Link>
    </>
  );
}

Photos.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Photos;
