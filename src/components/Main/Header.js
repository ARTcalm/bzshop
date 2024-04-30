import React from 'react';
import Categories from './Categories';
import {NavLink} from "react-router-dom";
import {PAGES} from "./consts";

export default function Header(props) {





  return (
    <header>
        <header>
            <NavLink to={'/'}> <span className='logo'>BZ</span> </NavLink>
            <div className='categoriesUI'>
                {PAGES.map(el => (
                    <NavLink to={el.route}>
                        <div key={el.key}>{el.name}</div>
                    </NavLink>
                ))}
            </div>
        </header>
    </header>
  )
}
