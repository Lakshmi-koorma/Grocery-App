import Constants from "../api/Constants";
import { Link } from "react-router-dom";
function Category(props) {
  const { catId, catName, catImage } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={Constants.IMAGE_URL + catImage} alt="image" />
        <div class="card-body">
          <h5 class="card-title">{catName}</h5>

          <Link to={"/products/" + catId} class="btn btn-primary btn-block">
            select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
