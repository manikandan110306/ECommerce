import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateShipping } from "./Shipping";

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { user } = useSelector((state) => state.authState);
  const { items: cartItems, shippingInfo } = useSelector(
    (state) => state.cartState
  );

  // Redirect if no orderInfo
  useEffect(() => {
    if (!orderInfo) {
      navigate("/cart");
      return;
    }
    validateShipping(shippingInfo, navigate);
  }, [orderInfo, shippingInfo, navigate]);

  // Stop render if orderInfo not ready
  if (!orderInfo) return null;

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
    shipping: {
      name: user?.name,
      address: {
        city: shippingInfo.city,
        postal_code: shippingInfo.postal_code,
        country: shippingInfo.country,
        state: shippingInfo.state,
        line1: shippingInfo.address,
      },
      phone: shippingInfo.phoneNo,
    },
  };

  const order = {
    orderItems: cartItems,
    shippingInfo,
    itemsPrice: orderInfo.itemsPrice,
    shippingPrice: orderInfo.shippingPrice,
    taxPrice: orderInfo.taxPrice,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={submitHandler}>
          <h1 className="mb-4">Card Info</h1>
          <div className="form-group">
            <label htmlFor="card_num_field">Card Number</label>
            <input
              type="text"
              id="card_num_field"
              className="form-control"
              defaultValue=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_exp_field">Card Expiry</label>
            <input
              type="text"
              id="card_exp_field"
              className="form-control"
              defaultValue=""
            />
          </div>

          <div className="form-group">
            <label htmlFor="card_cvc_field">Card CVC</label>
            <input
              type="text"
              id="card_cvc_field"
              className="form-control"
              defaultValue=""
            />
          </div>

          <button id="pay_btn" type="submit" className="btn btn-block py-3">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
