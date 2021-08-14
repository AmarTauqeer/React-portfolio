import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productid } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productid}`)
      .catch((err) => console.log(err));

    dispatch(selectedProduct(response));
  };

  useEffect(() => {
    if (productid && productid !== null) fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productid]);

  return (
    <div>
      <h2 className="heading mb-4">Product Detail</h2>
      <br />
      <br />
      <br />
      {product.data && (
        <div className="row">
          <div className="col">
            <div class="card" style={{ border: "none" }}>
              <div class="card-body">
                <img
                  src={product.data.image}
                  alt="image"
                  className="prod-image mb-4"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <h4 class="card-title mb-2">{product.data.title}</h4>

            <h4 className="text-center">$ {product.data.price}</h4>
            <h4>{product.data.category}</h4>
            <h5 className="mt-4">{product.data.description}</h5>
            <button type="button" className="form-control btn btn-success mt-4">
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
