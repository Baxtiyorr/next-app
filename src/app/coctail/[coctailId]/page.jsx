// 11118

'use client'

import Image from "next/image";
import './style.css'

export default async function coctailDetails({params}){
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.coctailId}`)
    const data = await response.json()
    console.log(data);
    // const {strAlcoholic, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strInstructions
    // } = data
   
    return(
        <>
            {
                data.drinks.map((coctail, index) =>(
                    <div className="coctail-card" key={coctail.idDrink}>
                        {/* <Image src={coctail.strDrinkThumb} alt="coctail"/> */}
                        
                        <h2>{coctail.strDrink}</h2>
                        <span>Status: {coctail?.strAlcoholic}</span>
                        <br />
                        <span>Category: {coctail?.strCategory}</span>
                        <p>Instruction: {coctail?.strInstructions}</p>
                        <ul>
                            <li> <h2>Ingredients:</h2> </li>
                            <li>{coctail?.strIngredient1}</li>
                            <li>{coctail?.strIngredient2}</li>
                            <li>{coctail?.strIngredient3}</li>
                            <li>{coctail?.strIngredient4}</li>
                        </ul>
                    
                    </div>

                ))
            }
        </>
    )
}
