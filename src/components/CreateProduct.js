import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "./ProductContext";

function CreateProduct() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const productContext = useContext(ProductContext);
  const history = useHistory();

  let submitHandler = (event) => {
    event.preventDefault();
    let productData = { name, quantity, price };
    productContext.setProductList([...productContext.productList, productData]);
    history.push("/products");
  };
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label for="username">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                placeholder="Enter Product name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="age">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={quantity}
                placeholder="Enter Quantity"
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label for="salary">Price</label>
              <input
                type="text"
                className="form-control"
                name="salary"
                value={price}
                placeholder="Enter Price"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Create Product"
                className="btn btn-primary mt-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CreateProduct;
