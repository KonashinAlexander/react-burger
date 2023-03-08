import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react"
import style from './app-header.module.css';
import cn from 'classnames';

export const AppHeader = () => {
    return (
        <header className={style.header}>
            <nav className={cn(style.nav, 'p-4')}>
                <div className={style.box}>
                    <a href="#" className={cn(style.link, style.link_active)}>
                        <BurgerIcon type="primary" />
                        <span className="text text_type_main-default ml-2 mr-2" >Конструктор</span>
                    </a>
                    <a href="#" className={cn(style.link, style.link_active)}>
                        <ListIcon type="secondary" />
                        <span className="text text_type_main-default text_color_inactive ml-2" >Лента заказов</span>
                    </a>

                </div>
                
                <Logo /> 
                <a href="#" className={cn(style.link, style.link_active)}>
                    <ProfileIcon type="secondary" />
                    <span className="text text_type_main-default text_color_inactive ml-2" >Личный кабинет</span>
                </a>             
            </nav>
        </header>    
    )
}