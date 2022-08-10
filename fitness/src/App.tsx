import React from 'react';
// import { Routes, Route} from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { useState, useEffect} from 'react';
import { exerciseOptions, fetchData} from './utils/fetchData';

function App() {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  

  useEffect(() => {
    const fetchExcercise = async () => {
    const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    console.log(bodyParts);
    setBodyParts(bodyParts);
  }
  
  fetchExcercise();

  },[])
  
  return (
    <div>
       <NavigationBar/>
    </div>
  );
}

export default App;



// const [term, setTerm] = useState('');
// <Routes>
//   <Route path="/" element={<NavigationBar />}>

//   </Route>
// </Routes>

{/* <form >
  <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
</form> */}