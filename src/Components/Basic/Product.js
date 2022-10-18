import { useState } from "react";

const Product = () => {
  const [flavour, setFlavour] = useState("Flavour");
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Pizza Image</h4>
          <h5 className="card-title">{flavour}</h5>
        </div>
      </div>
      <hr />
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Magerita</h4>
          <p className="card-text">540gr 3300kkal</p>
          <div className="flavour-wrapper">
            <button
              className="btn btn-outline-dark"
              onClick={() => setFlavour("Cheese")}
            >
              Cheese
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setFlavour("Meat")}
            >
              Meat
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => setFlavour("Bacon")}
            >
              Bacon
            </button>
          </div>
          <button className="btn btn-danger form-control">add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
