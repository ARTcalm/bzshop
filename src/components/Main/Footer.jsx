import React from 'react'

export default function Footer() { // Футер всегда есть на старнице, а не только в складе, вынеси к хедеру и заснуть компоненту в Layout, а не Main
  return (
    <footer>
      Все права защищены &copy;
    </footer>
  )
}
