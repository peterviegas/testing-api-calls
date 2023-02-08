import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/lib/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { APIComponent } from './apiComponent';

const server = setupServer(
	rest.get('/api', async (req, res, ctx) => {
		return res(ctx.json({ name: "Jack"}));
	})
);

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('gets the data', async() => {
	render(<APIComponent/>);
	const out = await waitFor(() => screen.getByRole("contentinfo"));
	expect(out).toHaveTextContent("Name is Jack");
  });