import { Card, Col, Button } from 'antd';
import React, { Component } from 'react';

function FoodBox(props) {
    const {handleDeleteFood} = props
    return (
        <>
            <Col>
                <Card
                    title={props.food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={props.food.image} height={60} alt="food" />
                    <p>Calories: {props.food.calories}</p>
                    <p>Servings: {props.food.servings}</p>
                    <p>
                        <b>Total Calories: {props.food.calories} * {props.food.servings} </b> kcal
                    </p>
                    <Button type="primary" onClick={() => handleDeleteFood(props.food.name)}>
                        Delete
                    </Button>
                </Card>
            </Col>
        </>
    );
}

export default FoodBox;
