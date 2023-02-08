import React, { useState, useEffect  } from 'react';
import './App.css';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

// add custom jest matchers from jest-dom
//import '@testing-library/jest-dom';

// the component to test
//import Fetch from './components/fetch';

/*
// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({greeting: 'hello there'}))
  }),
)*/

// establish API mocking before all tests
//beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
//afterEach(() => server.resetHandlers())
// clean up once the tests are done
//afterAll(() => server.close())

/*
test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})*/
/*
test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})*/





const App : React.FC = () => {

  //Call fetch
  /*const getCharacters = async (pageNumber : number) => {
    const apiResponse = await fetch(`http://api.disneyapi.dev/characters?page=${pageNumber}`);
    const json = await apiResponse.json() as { data: DisneyCharacter[] };
      setCharacters(json.data);
  };*/

  return (
    <div className="App">
      <h1>Hello!!!!</h1>
    </div>
  );
}

export default App;
