import React, { useEffect, useState } from "react"
import { getIngredients } from "../../utils/api"
import { AppHeader } from "../app-header/app-header"
import { BurgerConstructor } from "../burger-constructor"
import { BurgerIngredients } from "../burger-ingredients"
import style from './app.module.css'

// getIngredients()
//     .then(data => console.log(data))


export const Application = () => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getIngredients().then(data => {setIngredients(data)})
    }, [])

    return (     
        <div className={style.app}>
            <AppHeader />
            <main className={style.main}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor constructorIngredients={ingredients}/>
            </main>
        </div>    
    )
}