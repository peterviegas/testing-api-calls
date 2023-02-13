import React from 'react';
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import App from './App';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';
//import Fetch from './components/fetch'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Star Wars API/i);
  expect(linkElement).toBeInTheDocument();
});


// add custom jest matchers from jest-dom
//import '@testing-library/jest-dom';

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/people/1/"
    }))
  }),
)

// establish API mocking before all tests
beforeAll(() => server.listen())
//reset any request handlers that are declared as a part of our tests
//(i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

/*
test('loads and displays greeting', async () => {
  render(<App />)

  //fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.findByText('Name:'))
  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  //expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  //expect(screen.getByRole('button')).toBeDisabled()
})*/
/*
test('handles server error', async () => {
  server.use(
    rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
      
      return res(ctx.status(500))
    }),
  )

  render(<App />)

  //fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor( ()=> screen.findByText(/Oops.../i));
  const element = screen.getByText(/"Oops... something went wrong, try again 🤕/i);
  expect(element).toBeInTheDocument();
})

test('check error message on 418', async () => {
  render(<App />);
  await waitFor( ()=> screen.findByText(/418/i));
  const element = screen.getByText(/418 I'm a tea pot/i);
  expect(element).toBeInTheDocument();
});*/
