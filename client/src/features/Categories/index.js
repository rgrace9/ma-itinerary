import React, { useEffect, useState } from "react";
import CategoryCard from "features/Categories/components/CategoryCard";
import YELP from "utils/yelpAPI";
import "features/Categories/styles/Categories.scss";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // when the component is unmounted ignore will be set to true
    let ignore = false;
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError({});
        const response = await YELP.request({
          url: "categories",
        });

        if (!ignore) {
          setData(response.data.categories);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="categories-container">
      {data.map((d) => (
        <CategoryCard key={d.alias} category={d} />
      ))}
    </div>
  );
};

export default Categories;
