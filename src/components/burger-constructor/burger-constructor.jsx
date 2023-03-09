import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import React from "react"
import cn from 'classnames'
import style from '../burger-constructor/burger-constructor.module.css'

export const BurgerConstructor = ( {constructorIngredients}) => {
   

    const bun = constructorIngredients.filter(data => data.name === 'Краторная булка N-200i');
    
    const otherIngredients = constructorIngredients.filter(data => data.name !== 'Краторная булка N-200i'); 

    return (
        <>
            <div className={cn(style.container, 'pt-25')}> 

                <div className={style.box_small}>
                    {bun.map((data) => <ConstructorElement {...data} type='top' key={data._id} thumbnail={data.image} text={data.name}/>)}    
                </div>
                          
            
                <div className={cn(style.box_big, 'mt-4')}>
                    {otherIngredients.map((data) => <ConstructorElement key={data._id} thumbnail={data.image} text={data.name} {...data}/>)}     
                </div>

                <div className={cn(style.box_small, 'mt-4')}>
                    {bun.map((data) => <ConstructorElement {...data} type='bottom' key={data._id} thumbnail={data.image} text={data.name}/>)}    
                </div> 

                <div className={style.box_small}>
                      <p>counter plus button</p>
                </div> 
                           
                       
            </div> 
        
        </> 
    )
    
    
    
    
    
}