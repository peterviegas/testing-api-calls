import React, { useState, useEffect  } from 'react';
import './App.css';
import  {People} from './components/people';
import {PeopleContainer} from './components/peopleContainer'
import { Page } from './components/page'

const App : React.FC = () => {

  const [people, setPeople] = useState<People>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
  
  useEffect(() => {
    getPeople(currentPage);
  }, [currentPage]);

  const getPeople = async (pageNumber : number) => {
    try{
      const apiResponse = await fetch(`https://swapi.dev/api/people?page=${pageNumber}`);
      switch (apiResponse.status)
      {
        case 200: {
          const json = await apiResponse.json() as { results: People[] };
          //const jsonPage = await apiResponse.json() as { data: Page[] };
          setPeople(json.results[0]);
          break;
        }
        case 418:{
          setErrorMessage("418 I'm a tea pot 🫖, silly");
          break;
        }
        case 500:{
          setErrorMessage("Oops... something went wrong, try again 🤕");
          break;
        }
        default:{
          setErrorMessage ("Error: "+ apiResponse.status);
          break;
        }
      }

    }catch(error){
      setErrorMessage ("Error - Execution without return code");
    }
  }
   
  return (
    <div className="App">
      <h1>The Star Wars API</h1>
      {people && <PeopleContainer people={people}/>}
    </div>
  );
}

export default App;
