import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom/cjs/react-router-dom.min'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state ={
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
    return (
        <header>


    <div className='categories'>
        {this.state.categories.map(el => (
            <div key ={el.key}>{el.name}</div>
        ))}
    </div>
    </header>
    )
  }
}

export default Categories