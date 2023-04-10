import { render, screen } from '@testing-library/react';
import { BUTTON_ICON_TEST, ButtonIcon } from './ButtonIcon';
import type { ButtonIconProps, ButtonIconVariant } from './ButtonIcon';

const buttonProps = {
	children: 'Test',
	variant: 'pink',
	title: 'title',
	onClick: jest.fn()
} satisfies ButtonIconProps;


const buttonVariants: { variant: ButtonIconVariant; className: string }[] = [
	{ variant: 'pink', className: 'pink' },
	{ variant: 'orange', className: 'orange' },
	{ variant: 'ghost', className: 'ghost' },
];

describe('Button icon', () => {
	test('Should display provider children', () => {
		render(<ButtonIcon {...buttonProps} />)

		const children = screen.getByTestId(BUTTON_ICON_TEST.CONTAINER);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(buttonProps.children);
	});
	buttonVariants.forEach(buttonVariant => {
		test(`Should set right classes when provided ${buttonVariant.variant} variant`, () => {
			render(<ButtonIcon {...buttonProps} variant={buttonVariant.variant} />)

			const children = screen.getByTestId(BUTTON_ICON_TEST.CONTAINER);

			// eslint-disable-next-line testing-library/no-node-access
			expect(children).toHaveClass(buttonVariant.className);
		});
	});
	test('Should display provider title', () => {
		render(<ButtonIcon {...buttonProps} title='test title' />)

		const children = screen.getByTestId(BUTTON_ICON_TEST.CONTAINER);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent('test title');
	});
});