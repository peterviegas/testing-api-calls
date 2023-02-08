import { renderHook, act } from "@testing-library/react-hooks";
import { useAPI } from "./useAPI";
import { rest } from 'msw'
import { setupServer } from 'msw/lib/node';

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


test("should increment", async() => {
	const { result, waitForNextUpdate } = renderHook(() => useAPI());

	await waitForNextUpdate();
	expect(result.current).toEqual({ name: "Jack"});
})


