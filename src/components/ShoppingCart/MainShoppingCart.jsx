import styles from './MainShoppingCart.module.css'
import { FaTrash } from 'react-icons/fa';

export const Cart = (props) =>{

    const {cartItems, setCartItems} = props

 
    let summa = 0
    let sumcount = 0
    cartItems.forEach(el => sumcount += Number.parseFloat(el.count))
    cartItems.forEach(el => summa += Number.parseFloat(el.count) * Number.parseFloat(el.price))
        
    const plus = (id) =>{
          setCartItems(cartItems => {
          return cartItems.map(el => {
            if(el.id === id){
              return {
                ...el,
                count: el.count + 1
              }
            }
            return el
          } )}
        )}
    
    const minus = (id) =>{
          setCartItems(cartItems => {
          return cartItems.map(el => {
            if(el.id === id){
              
              return {
                ...el,
                count: el.count - 1 > 1 ? el.count - 1 : 1
              }
            }
            return el
          } )}
        )}

    const DeleteCartItems = (id) =>{
          setCartItems(cartItems => cartItems.filter(el=> el.id !== id))
          
        }

    const showNothing = () =>{    //ФУНКЦИЯ ПУСТОЙ КОРЗИНЫ
          return(<div className={styles.empty}>В КАРМАНАХ ПУСТО</div>) 
        }

    return(
         <div className={styles.CARTblock}>
            <div className={styles.CARTplace}>
            <div> {cartItems.length > 0 ? cartItems.map(el => 
            (
              <div key={el.id} className={styles.CartItems}>
                  <img src = { "./img/" + el.img1} className={styles.cartIMG} alt='cartImage'/>
                  <p className={styles.cartTITLE}>{el.title}</p>
                  <p className={styles.cartDESC}>{el.desc}</p>
                  <b className={styles.cartPRICE}>{new Intl.NumberFormat().format(el.count * el.price)}₽</b>
                  <FaTrash className={styles.DeleteCartItems} onClick={() => {DeleteCartItems(el.id)}} key={el.id} item={el} />
                  <div className={styles.PMButtons}>
                    <button className={styles.cartPlus}  onClick={()=>plus(el.id)} >+</button>
                    <p className = {styles.CountItem}>{el.count}</p>
                    <button className={styles.cartMinus} onClick={()=> minus(el.id)}>-</button>
                  </div>
              </div>
            )): showNothing()} </div>
              <div className={styles.DescCart}>
                <p className={styles.DescCartHeader}>Корзина</p>
                <div className={styles.DescCartMain}>  
                  <p className={styles.DescCartCount}>Количество: {new Intl.NumberFormat().format(sumcount)}</p>
                  <p className={styles.DescCartSale}>Ваша скидка: 0%</p>
                </div>
                <p className={styles.Summa}>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
              </div>
            </div>
          </div>                  
)} 
