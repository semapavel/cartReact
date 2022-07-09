import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({products, title, remove}) => {
	return (
		<div>
			<h1>{title}</h1>
			{products.map(product => 
				<ProductItem remove={remove} product={product} key= {product.id} />
				)}
		</div>
	);
};

export default ProductList;