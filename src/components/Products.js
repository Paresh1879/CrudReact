import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./ProductContext";

function Products() {
  const productContext = useContext(ProductContext);

  const deleteProductHandler = (index) => {
    let confirm = window.confirm("Do you really want to delete this product?");
    if (confirm) {
      productContext.productList.splice(index - 1, 1);
      productContext.setProductList([...productContext.productList]);
    }
  };
  return (
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Products</h6>
      </div>

      <div class="card-body">
        <Link class="btn btn-primary mb-4" to="/create-product">
          Create Product
        </Link>
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
              {productContext.productList.map((product, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>
                      <Link
                        to={`/edit-product/${index + 1}`}
                        className="btn btn-sm btn-primary ml-3"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger ml-3"
                        onClick={() => {
                          deleteProductHandler(index + 1);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
