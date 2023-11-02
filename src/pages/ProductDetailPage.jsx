import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Navbar from "../components/Navbar";
import Constants from "../api/Constants";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/Cart-actions";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const fetchData = () => {
    axios
      .get(" https://orca-app-jhg4l.ondigitalocean.app/api/products/" + id)
      //   .get(Endpoints.PRODUCT_BY_ID + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onAddtoCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px",
            marginTop: "80px",
            borderRadius: "10px",
          }}>
          <div className="row">
            <div className="col-md-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h5>{product.productName}</h5>
              <p>{product.unit}</p>
              <p>{product.description}</p>
              <h2>
                <span>&#8377;</span> {product.price}
                <span
                  style={{
                    fontSize: "22px",
                    marginLeft: "10px",
                    color: "#888",
                  }}>
                  <del>
                    {" "}
                    <span>&#8377;</span>
                    {product.mrp}
                  </del>
                </span>
              </h2>
              <br />
              <button className="btn btn-primary" onClick={onAddtoCartHandler}>
                {" "}
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetailPage;
