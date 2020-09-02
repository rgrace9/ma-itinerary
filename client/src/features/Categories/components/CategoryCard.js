import React from "react";
import PropTypes from "prop-types";
import "features/Categories/styles/CategoryCard.scss";

const CategoryCard = ({ category }) => {
  console.log("category", category);
  return (
    <div className="category-card">
      <p>{category.title}</p>
    </div>
  );
};

CategoryCard.propTypes = {};

export default CategoryCard;
