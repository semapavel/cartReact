import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import ProductForm from "./components/ProductForm";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'
function App() {
	const [products, setProducts] = useState([
		{ index: 1, title: 'njdfh1', price: 123 }
	])

	const [total, setTotal] = useState({
		price: products.reduce((prev, curr) => { return prev + Number(curr.price) }, 0)
	})
	useEffect(() => {
		setTotal({
			price: products.reduce((prev, curr) => { return prev + Number(curr.price) }, 0)
		})
	}, [products])

	const createProduct = (newProduct) => {
		setProducts([...products, newProduct])
	}

	const removeProduct = (product) => {
		setProducts(products.filter(p => p.id !== product.id))
	}

	return (
		<div className="App">
			<ProductForm create={createProduct} />
			{products.length
				? <ProductList remove={removeProduct} products={products} title="Список товаров" />
				: <h1>Список пуст</h1>
			}
			<div className="statistics">
				<div className="statistics__count">
					Количество товаров: {products.length}
				</div>
				<div className="statistics__price">
					Цена: {total.price.toFixed(2)}
				</div>

			</div>
		</div>
	);
}
export default App;
