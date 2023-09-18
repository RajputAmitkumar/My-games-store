import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import './item.css'
let i = 1
const Item = ({ item }) => {
    const { cartData, addCartdata } = useContext(CartContext)

    return (
        <>
            <section className="cart">
                <img className="card-image" src={item.link}></img>
                <div className="sub-cont">
                    <div>

                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-description">{item.description}</div>
                    </div>
                    <div className="card-footer">
                        <div className="price">{item.price} <i className="fa fa-inr fa-inr-item" aria-hidden="true"></i></div>
                        <button className="add-button" onClick={() => { addCartdata(item) }}>Add to cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Item;