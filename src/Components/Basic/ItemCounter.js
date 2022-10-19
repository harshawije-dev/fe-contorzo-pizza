import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [price, setPrice] = useState(12);

  useEffect(() => {
    if (counter >= 5) {
      console.log("Need to disable the button");
    }
  }, [counter]);

  return (
    <div className="volume-wrapper">
      <div className="row">
        <div className="col-6">
          <div className="box-lft">
            <button
              className="btn btn-light"
              onClick={() => [setCounter(counter + 1), setPrice(price + 10.0)]}
            >
              +
            </button>
            <p>{counter}</p>
            <button
              className="btn btn-light"
              onClick={() =>
                counter <= 0
                  ? 0
                  : [setCounter(counter - 1), setPrice(price - 10.0)]
              }
            >
              -
            </button>
          </div>
        </div>
        <div className="col-6">
          <div className="box-rft">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
