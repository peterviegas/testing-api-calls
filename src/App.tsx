import React, { useState, useEffect  } from 'react';
import './App.css';
import  {People} from './components/people';
import {PeopleContainer} from './components/peopleContainer'
import { Page } from './components/page'

const App : React.FC = () => {

  const [people, setPeople] = useState<People>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  
  useEffect(() => {
    getPeople(currentPage);
  }, [currentPage]);

  const getPeople = async (pageNumber : number) => {
    const apiResponse = await fetch(`https://swapi.dev/api/people?page=${pageNumber}`);
    const json = await apiResponse.json() as { results: People[] };
    //const jsonPage = await apiResponse.json() as { data: Page[] };
    setPeople(json.results[0]);
  }
   
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      {people && <PeopleContainer people={people}/>}
    </div>
  );
}

export default App;
