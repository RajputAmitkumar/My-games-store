import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
import { CartContext } from '../../context/cart-context';
const Header = () => {
    const { cartData } = useContext(CartContext)
    const navigate = useNavigate()
    return (
        <>
            <nav className="nav-bar">
                
                <div className='site-name'>Games store</div>
                <div>
                    
                <div onClick={()=> {navigate('./cart')}}>
                    <span>{cartData.length}</span>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                </div>
            </nav>
        </>
    )
}
export default Header;