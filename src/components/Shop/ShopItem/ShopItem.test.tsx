import { render, screen } from '@testing-library/react';
import { SHOP_ITEM_TEST, ShopItem, ShopItemProps } from './ShopItem';

const shopItemProps = {
	id: '0',
	image: 'test',
	type: 'type',
	title: 'title',
	price: '500',
	handleAddToCart: jest.fn(),
} satisfies ShopItemProps;

describe('Shop item', () => {
	test('Should dispay provider image', () => {
		render(<ShopItem {...shopItemProps} />);

		const image = screen.getByTestId(SHOP_ITEM_TEST.IMAGE);

		expect(image).toBeInTheDocument();
	});
	test('Should dispay provider type', () => {
		render(<ShopItem {...shopItemProps} />);

		const type = screen.getByTestId(SHOP_ITEM_TEST.TYPE);

		expect(type).toHaveTextContent(shopItemProps.type);
	});
	test('Should dispay provider title', () => {
		render(<ShopItem {...shopItemProps} />);

		const title = screen.getByTestId(SHOP_ITEM_TEST.TITLE);

		expect(title).toHaveTextContent(shopItemProps.title);
	});
	test('Should dispay provider price', () => {
		render(<ShopItem {...shopItemProps} />);

		const price = screen.getByTestId(SHOP_ITEM_TEST.PRICE);

		expect(price).toHaveTextContent(shopItemProps.price);
	});
});