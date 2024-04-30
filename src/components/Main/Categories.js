import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom/cjs/react-router-dom.min'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
            categories_UI:[{
                key: 'склад',
                name: 'СКЛАД',
                route: '/sklad'
                },
                {
                key:'торги',
                name: 'ТОРГИ',
                route:'/torgi'
                }, 
                {
                key:'о нас',
                name: 'О НАС',
                route: '/aboutus'
                },
                {
                key:'контакты',
                name: 'КОНТАКТЫ',
                route: '/contact'
                },
                
            ],
            categories: [
                {
                    key: 'Всё',
                    name: 'Всё'
                },
                {
                    key: 'Худи',
                    name: 'Худи'
                },
                {
                    key: 'Джинсы',
                    name: 'Джинсы'
                },
                {
                    key: 'Лифак',
                    name: 'Лифак'
                },
                {
                    key: 'Обувь',
                    name: 'Обувь'
                }
            ]
        }
    }
  render() {
    return (<header>

    <div className='categoriesUI'>
        {this.state.categories_UI.map(el => (
        <NavLink to={el.route} >
            <div key={el.key} onClick={() => this.props.chooseCategoryUI(el.key)} >{el.name}</div>
        </NavLink>
        ))}
    </div>

    <div className='categories'>
        {this.state.categories.map(el => (
            <div key ={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
    </div>
    </header>
    )
  }
}

export default Categories