
import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../assets/all_product';
import Item from '../Components/Item/Item';
import './Results.css'

const Results = () => {
  const { category } = useParams();
  const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === category);

  return (
    <div className="results_full_div">
        <h1>Search Results : {category.toLocaleUpperCase()}</h1>
        <div className="results">
        

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item,i) => (
              <Item key={i} id = {item.id} name = {item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />    
          ))
        ) : (
          <h1>No products found in this category</h1>
        )}
      </div>
    </div>

  );
};

export default Results;
