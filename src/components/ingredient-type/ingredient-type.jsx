import React, { useEffect, useState } from "react"
import cn from 'classnames';
import { BurgerIngredient } from "@ya.praktikum/react-developer-burger-ui-components";
import style from '../ingredient-type/ingredient-type.module.css'


export const IngredientType = ({title, id, ingredients}) => {

    return (
        <section className={title}>
            <h2 className={cn(style.title, "text", "text_type_main-medium")} id={id}>{title}</h2>
            <div className={cn(style.list, 'mb-10', 'pl-4', 'pr-4')}>
                {ingredients?.map(data => <BurgerIngredient key={data._id} {...data} count = {1} />)}
            </div>
        </section>
    )

}