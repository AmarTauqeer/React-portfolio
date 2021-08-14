import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const data = products.map((prod) => (
    <div className="row">
      <div key={prod.title}>
        <Link to={`/products/${prod.id}`} className="nav-link">
          <div class="card">
            <div class="card-body">
              <img src={prod.image} alt="image" className="prod-image mb-4" />
              <h6 class="card-title">{prod.title}</h6>
              <h6>$ {prod.price}</h6>
              <h6>{prod.category}</h6>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="heading">Products</h2>
      <div className="product-list">{data}</div>
    </>
  );
};

export default Products;
