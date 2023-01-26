import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods)
  const [filteredFoodsList, setfilteredFoodsList] = useState(foods);

  function handleAddNewFood(newFood) {
    setFood((foods) => {
      const newFoodList = [newFood, ...foods];
      return newFoodList;
    })
  }
  function handleFilteredFood(keyword) {
    const filteredFoods = food.filter((food) => {
      return food.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setfilteredFoodsList(filteredFoods);
  }

  function handleDeleteFood(foodName) {
    const updatedFoodsList = filteredFoodsList.filter((food) => {
      return food.name !== foodName;
    });
    setfilteredFoodsList(updatedFoodsList);
  }

  return (
    <div className='App'>
      <h3>New Food Form</h3>
      <AddFoodForm handleAddNewFood={handleAddNewFood}></AddFoodForm>
      <Search handleFilteredFood={handleFilteredFood}/>
      {
        filteredFoodsList.map((food) => {
          return (
            <>
              <FoodBox food={food} handleDeleteFood={handleDeleteFood}/>
            </>
          )
        })
      }
    </div>
  )
}

export default App; 