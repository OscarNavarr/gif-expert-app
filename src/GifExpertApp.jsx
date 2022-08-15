import {useState} from "react";
import {AddCategory} from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {

  const [categories, setCategories] = useState(['Stock Market'])
  
  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories]);

  } 

  return (
    <>
        <h1>Gif Expert App by Oscar Navarro</h1>
        <AddCategory 
           onNewCategory={ (event) => onAddCategory(event)}
          currentCategories = {categories} />
                
        {
          categories.map( category => (
            <GifGrid key={category} category={category}/>
          ))
        }        
        
    </>
  )
}
