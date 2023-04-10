import { render, screen } from '@testing-library/react';
import { CART_ITEM_TEST, CartItem, CartItemProps } from './CartItem';

const cartItemProps = {
	id: '0',
	image: '/test',
	title: 'test',
	type: 'test',
	count: 0,
	price: '1000',
	handleAdd: jest.fn(),
	handleMinus: jest.fn(),
	handleRemove: jest.fn(),
} satisfies CartItemProps;

describe('Cart Item', () => {
	test('Should display provider image', () => {
		render(<CartItem {...cartItemProps} image='./test.img' />);

		const image = screen.getByTestId(CART_ITEM_TEST.IMAGE);

		expect(image).toBeInTheDocument();
	});
	test('Should display provider title', () => {
		render(<CartItem {...cartItemProps} title='Sofa' />);

		const title = screen.getByTestId(CART_ITEM_TEST.TITLE);

		expect(title).toBeInTheDocument();
	});
	test('Should display provider type', () => {
		render(<CartItem {...cartItemProps} type='Badroom' />);

		const type = screen.getByTestId(CART_ITEM_TEST.TYPE);

		expect(type).toBeInTheDocument();
	});
	test('Should display provider count', () => {
		render(<CartItem {...cartItemProps} count={12} />);

		const count = screen.getByTestId(CART_ITEM_TEST.COUNT);

		expect(count).toBeInTheDocument();
	});
	test('Should display provider price', () => {
		render(<CartItem {...cartItemProps} price='2331' />);

		const price = screen.getByTestId(CART_ITEM_TEST.PRICE);

		expect(price).toBeInTheDocument();
	});
});