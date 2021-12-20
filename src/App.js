import './App.css';
import { useState } from 'react';
import items from './allData';
import Menu from './Components/Menu';
import Button from './Components/Button';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="App">
      <div className="title">
         <h1>
           Who We Are ?
         </h1>
         <h2>Our names are Muratcan Tüfekçi and Arif Tanzer Kırar. In this project, we aimed to create new patterns with artificial intelligence in order to facilitate the lives of artists and contribute to their creativity. And by turning it into a web gallery, we wanted users to see the results of our project. You can view our photos divided into layer filters below. Enjoy the patterns produced with artificial intelligence :)</h2>
       </div>
       
       <div className="title">
         <h1>
           Our 
           <span> Gallery</span>
         </h1>
       </div>


      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}

export default App;