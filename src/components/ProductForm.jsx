import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const ProductForm = ({create}) => {
	const [product, setProduct] = useState({id:'', title:'', price:''})

	const addNewProduct = (e) => {
		e.preventDefault()
		const newProduct={...product, id: Date.now()}
		create (newProduct)
		setProduct({index:'', title:'', price:''})	
	}

	return (
		<form>
			<MyInput
				value={product.index}
				onChange = {e => setProduct({...product, index: e.target.value})}
				type="text"
				placeholder="Числовой идентификатор товара"	
			/>
			<MyInput
				value={product.title}
				onChange = {e => setProduct({...product, title: e.target.value})}
				type="text"
				placeholder="Название товара"	
			/>
			<MyInput
				value={product.price}
				onChange = {e => setProduct({...product, price: e.target.value})}
				type="text"
				placeholder="Цена товара"	
			/>
			<MyButton onClick ={addNewProduct}>Добавить</MyButton>				
		</form>
	);
};

export default ProductForm;