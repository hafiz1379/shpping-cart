import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams(); // ✅ useParams replaces props.match.params
  const data = useContext(ProductsContext);

  // Convert id from string to number (optional, depends on your data)
  const product = data[parseInt(id) - 1];

  // Add a check in case `product` is undefined (prevents crash on invalid ID)
  if (!product) return <p>Product not found.</p>;

  const { image, title, description, price, category } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}><span>Category:</span> {category}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to Shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
