import { render, screen } from '@testing-library/react';
import { TYPOGRAPHY_TEST, Typography } from './Typography'
import type { TypographyTag, TypographyProps, TypographyColor } from './Typography'

const typographyProps = {
	children: 'test',
	tag: 'h2',
	color: 'gray',
} satisfies TypographyProps;

const typographyTags: { tag: TypographyTag; className: string }[] = [
	{ tag: 'h1', className: 'h1' },
	{ tag: 'h2', className: 'h2' },
	{ tag: 'h3', className: 'h3' },
	{ tag: 'h4', className: 'h4' },
	{ tag: 'p', className: 'p' },
];
const typographyColors: { color: TypographyColor; className: string }[] = [
	{ color: 'black', className: 'black' },
	{ color: 'black-light', className: 'black-light' },
	{ color: 'white', className: 'white' },
	{ color: 'gray', className: 'gray' },
];

describe('Typography', () => {
	test('Should display provider children', () => {
		render(<Typography {...typographyProps} />);

		const children = screen.getByTestId(TYPOGRAPHY_TEST.CONTAINER);

		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(typographyProps.children);
	});

	typographyTags.forEach(typographyTag => {
		test(`Should set right tag when provided ${typographyTag.tag} tag`, () => {
			render(<Typography {...typographyProps} tag={typographyTag.tag} />);

			const children = screen.getByTestId(TYPOGRAPHY_TEST.CONTAINER);

			// eslint-disable-next-line testing-library/no-node-access
			expect(children).toHaveClass(typographyTag.className);
		});
	});

	typographyColors.forEach(typographyColor => {
		test(`Should set right classes when provided ${typographyColor.color} color`, () => {
			render(<Typography {...typographyProps} color={typographyColor.color} />);

			const children = screen.getByTestId(TYPOGRAPHY_TEST.CONTAINER);

			// eslint-disable-next-line testing-library/no-node-access
			expect(children).toHaveClass(typographyColor.className);
		});
	});
});