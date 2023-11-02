import { Link } from "react-router-dom";

function Product(props) {
  const { _id, productName, image, mrp, price, unit } = props.data;
  return (
    <div class="col-sm-4">
      <div class="card">
        <img
          src={"http://rjtmobile.com/grocery/images/" + image}
          className="card-top-image"
        />
        <div class="card-body">
          <h5 class="card-title">{productName}</h5>
          <p class="card-text">{unit}</p>
          <h2>
            <span>&#8377;</span> {price}
            <span>
              <del>
                {" "}
                <span>&#8377;</span>
                {mrp}
              </del>
            </span>
          </h2>
          <Link
            to={"/products/detail/" + _id}
            class="btn btn-primary btn-block">
            show details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
