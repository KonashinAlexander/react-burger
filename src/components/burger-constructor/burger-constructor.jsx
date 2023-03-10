import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components"
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
                    {bun.map((data) =>  <ConstructorElement 
                                        {...data} 
                                        type='top' 
                                        key={data._id} 
                                        thumbnail={data.image} 
                                        text={data.name}
                                        isLocked={true}
                                        />)
                    }    
                </div>                          
            
                <div className={cn(style.box_big, 'mt-4')}>
                    {otherIngredients.map((data) => 
                                        <div className={cn(style.box_flex)} key={data._id} >
                                            <DragIcon className={cn(style.icon)} />
                                            <ConstructorElement 
                                            {...data} 
                                            key={data._id} 
                                            thumbnail={data.image} 
                                            text={data.name}
                                            isLocked={false}/>   
                                        </div>
                                        )
                    }     
                </div>

                <div className={cn(style.box_small, 'mt-4')}>
                    {bun.map((data) => <ConstructorElement 
                                        {...data} 
                                        type='bottom' 
                                        key={data._id} 
                                        thumbnail={data.image} 
                                        text={data.name}
                                        isLocked={true}
                                        />)
                    }    
                </div> 

                <div className={cn(style.box__total_flex, 'pt-10 p-4')}>
                    <div className={cn(style.box__total_flex, 'mr-10')}>
                        <p className={cn('text', 'text_type_digits-medium', 'mr-4')}>123</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <Button htmlType="button" size="large">Оформить заказ</Button>
                </div>                            
                       
            </div> 
        
        </> 
    )
    
    
    
    
    
}