import { Divider, Image, Input } from 'antd';
import React, { useState } from 'react';


// Iteration 4
function AddFoodForm(props) {
    const [foodName, setFoodName] = useState("")
    const [foodImage, setFoodImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    
    function handleFormSubmit(event) {
        event.preventDefault();
        const newFood = {
            name: foodName,
            image: foodImage,
            calories: calories,
            servings: servings,
        };
        props.handleAddNewFood(newFood)
        setFoodName("");
        setFoodImage("");
        setCalories(0);
        setServings(0);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <Divider>Add Food Entry</Divider>

                <label for="name">Name</label>
                <Input value={foodName} type="text" onChange={(event) => setFoodName(event.target.value)} />

                <label for="image">Image</label>
                <Input value={foodImage} type="text" onChange={(event) => setFoodImage(event.target.value)} />


                <label for="calories">Calories</label>
                <Input value={calories} type="number" onChange={(event) => setCalories(event.target.value)} />


                <label for="servings">Servings</label>
                <Input value={servings} type="number" onChange={(event) => setServings(event.target.value)} />


                <button type="submit">Create</button>
            </form>
        </>
    );
}

export default AddFoodForm;
