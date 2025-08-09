# React FakeStore E-commerce App

A modern, elegant, and fully-functional e-commerce shopping cart built with React, Context API, and [FakeStore API](https://fakestoreapi.com/). This project demonstrates scalable state management, component reusability, and a seamless user experience for online shopping.

## 🌐 Live Preview
Experience the app live here: [React FakeStore E-commerce App](https://shpping-cart-puc8.onrender.com/products)


## ✨ Features

- **Product Listing:** Browse products fetched from FakeStore API
- **Product Details:** See detailed information for each product
- **Add to Cart:** Add, remove, and update product quantities in your cart
- **Cart Management:** Increase, decrease, or remove items; see total items and payment
- **Checkout Flow:** Clear cart or complete checkout with feedback
- **Responsive Design:** Fully mobile-friendly and responsive UI
- **Modern Stack:** Built with React, Context API, functional components, and hooks
- **Reusable Components:** Clean code with separation of concerns

## 📦 Project Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── Store.js
│   ├── ShopCart.js
│   ├── Navbar.js
│   └── ProductDetails.js
├── context/
│   ├── ProductContextProvider.js
│   └── CartContextProvider.js
├── helper/
│   └── functions.js
├── services/
│   └── api.js
└── App.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hafiz1379/shpping-cart.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in Browser:**

   Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 🛠️ Usage

- **Browse Products:** Click on "Products" in the navbar to see all available items.
- **View Details:** Click "Details" to see more about a product.
- **Manage Cart:** Add items to the cart, adjust quantities, or remove them.
- **Checkout:** Click "Checkout" to complete your purchase, or "Clear" to reset your cart.

## 🖥️ Tech Stack

- **Frontend:** React, Context API, CSS Modules
- **API:** [FakeStore API](https://fakestoreapi.com/)
- **Icons:** Custom SVGs

## 📚 Customization

- Replace styles in the `./components/*.module.css` files to suit your brand.
- Update icons in `./assets/icons/` as needed.
- Point to a different product API by modifying `services/api.js`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to [open an issue](https://github.com/hafiz1379/shpping-cart/issues) or submit a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Happy Shopping!**
