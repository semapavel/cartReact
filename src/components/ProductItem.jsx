import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';

const ProductItem = (props) => {

	return (
		<div>
			<div className="product">
				<div className="product__content">
					<strong>{props.product.index}. {props.product.title}</strong>
					<div>{props.product.price}</div>
				</div>
				<MyButton onClick ={() => props.remove(props.product)}>Удалить</MyButton>
			</div>
		</div>
	);
};

export default ProductItem;