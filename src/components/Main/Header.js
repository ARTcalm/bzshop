import React from 'react';
import Categories from './Categories';

export default function Header(props) {

  return (
    <header>
      <div>
        <span className='logo'>BZ</span>
        <Categories />
      </div>

    </header>
  )
}
