import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";
import './cart.css'

const Cart = () => {
    const { cartData } = useContext(CartContext);
    const total = useRef(0);
    const [RazorPay] = useRazorpay();

    const razorpayDisplay = useCallback(async (total) => {
        const options = {
            key: 'rzp_test_YvjGRVTVVlhpjE',
            amount: total,
            currency: 'INR',
            name: 'Gamers website',
            description: 'Gaming transaction',
            handler: (res) => {
                console.log(res)
            },
            prefill: {
                name: 'Amit',
                email: 'amit567@gmail.com',
                conatact: '8980738892'
            },
            notes: {
                address: 'home address'
            },
            theme: {
                color: '#3399cc'
            }
        }
        const rzp1 = new RazorPay(options)
        rzp1.open()
    }, [RazorPay])
    // total.current.price = 0
    return (
        <>
            <section>
                <div >
                    {cartData.map((cartItem, index) => {
                        // total.current += cartItem.price

                        return (
                            <>
                                <div className="cart-cont">
                                    <div className="check">
                                        <span>
                                            {index + 1}.
                                        </span>
                                        <img className="cart-image" src={cartItem.link} alt="image" width='20px' height='20px' />
                                        <span>{cartItem.title}</span>
                                    </div>
                                    <button className="remove-btn" onClick={() => { }}>Remove from cart</button>
                                    <div className="cart-price">{cartItem.price}<i className="fa fa-inr fa-inr-cart" aria-hidden="true"></i></div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div>
                    {/* <div>billing information</div> */}
                    <div>
                        {cartData.map((cart) => {
                            total.current += cart.price
                            console.log(total.current)

                            return <div>

                            </div>
                        })}
                    </div>
                                <div>
                                    billing information
                                </div>
                        <button onClick={() => { razorpayDisplay(total.current * 100) }}>Checkout</button>
                    <div>Total {total.current}</div>
                </div>
            </section>
        </>
    )
}
export default Cart;