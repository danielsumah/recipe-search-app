import React from 'react';
import style from './recipe.modules.css'
const Recipe = ({title, image, calories,ingredients}) => {
    return (
        <div className="card" style={{width: "18rem", padding:'10px', marginTop: "20px"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </p>
                <a href="#" className="btn btn-primary">{calories}</a>
            </div>
        </div>


    )
}

export default Recipe;