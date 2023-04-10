import { render, screen } from '@testing-library/react';
import { BUTTON_TEST, Button } from './Button';
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button';

const buttonProps = {
	children: 'Test',
	variant: 'pink',
	onClick: jest.fn()
} satisfies ButtonProps;


const buttonVariants: { variant: ButtonVariant; className: string }[] = [
	{ variant: 'pink', className: 'pink' },
	{ variant: 'orange', className: 'orange' },
	{ variant: 'ghost', className: 'ghost' },
];

const buttonSizes: { size: ButtonSize; className: string }[] = [
	{ size: 's', className: 's' },
	{ size: 'm', className: 'm' },
	{ size: 'l', className: 'l' },
];

describe('Button', () => {
	test('Should display provider children', () => {
		render(<Button {...buttonProps} />)

		const children = screen.getByTestId(BUTTON_TEST.CONTAINER);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(buttonProps.children);
	});
	buttonVariants.forEach(buttonVariant => {
		test(`Should set right classes when provided ${buttonVariant.variant} variant`, () => {
			render(<Button {...buttonProps} variant={buttonVariant.variant} />)

			const children = screen.getByTestId(BUTTON_TEST.CONTAINER);

			// eslint-disable-next-line testing-library/no-node-access
			expect(children).toHaveClass(buttonVariant.className);
		});
	});
	buttonSizes.forEach(buttonSize => {
		test(`Should set right classes when provided ${buttonSize.size} size`, () => {
			render(<Button {...buttonProps} size={buttonSize.size} />)

			const children = screen.getByTestId(BUTTON_TEST.CONTAINER);

			// eslint-disable-next-line testing-library/no-node-access
			expect(children).toHaveClass(buttonSize.className);
		});
	});
	test('Should set right classes when button active', () => {
		const activeClass = `${buttonProps.variant}Active`

		render(<Button {...buttonProps} active={true} />)

		const children = screen.getByTestId(BUTTON_TEST.CONTAINER);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveClass(activeClass);
	});
});