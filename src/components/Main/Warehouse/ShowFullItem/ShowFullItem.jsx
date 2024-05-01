import React, {Component} from 'react'
import styles from './ShowFullItem.module.css'

export class ShowFullItem extends Component {
  render() {
    return (
    <div className={styles.fullitem}>
      <div>
        <img src = { "./img/" + this.props.item.img } onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}₽</b>
        <div className={styles.addtocart_fullitem}>ЗАКИНУТЬ</div>
      </div>
    </div>
    )
  }
}

export default ShowFullItem