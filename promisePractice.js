// item to card
// place and order which will return a orderID
// using the order ID, proceed to payment
// it shall return payment ID
// with the payment ID, update the wallet balance

const cart = ["shirt", "pant", "shoe"];
const orderID = "Abcd1234";
const paymentID = "Pqrs5678";

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart.length) {
        resolve(orderID);
      } else {
        reject("Cart is empty");
      }
    }, 2000);
  });
};

const createPayment = (orderID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderID) {
        resolve(paymentID);
      } else {
        reject("Order ID is invalid");
      }
    }, 5000);
  });
};

const updateWallet = (paymentID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentID) {
        resolve("Wallet updated successfully");
      } else {
        reject("Invalid Payment");
      }
    }, 2000);
  });
};

createOrder(cart)
  .then((id) => createPayment(id))
  .then((paymentID) => updateWallet(paymentID))
  .catch((e) => console.log("something is wrong", e));
