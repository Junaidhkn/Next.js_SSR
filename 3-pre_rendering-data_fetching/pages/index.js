import React from 'react';

const HomePage = (props) => {
	const { products } = props;
	return (
		<ul>
			{products.map((product) => {
				return <li key={product.id}>{product.title}</li>;
			})}
		</ul>
	);
};

export const getStaticProps = async () => {
	return {
		props: {
			products: [{ id: 'p1', title: 'Product One' }],
		},
	};
};

export default HomePage;
