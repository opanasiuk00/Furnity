
import { render, screen } from '@testing-library/react';
import { CONTAINER_TEST, Container } from './Container';
import type { ContainerProps } from './Container';


const containerProps = {
	children: 'test'
} satisfies ContainerProps;

describe('Container', () => {
	test('Should display provider children', () => {
		render(<Container {...containerProps} />);

		const children = screen.getByTestId(CONTAINER_TEST.CONTAINER);
		// eslint-disable-next-line testing-library/no-node-access
		expect(children).toHaveTextContent(containerProps.children);
	})
})