import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faBagShopping} size="xl" style={{color: "#d2ce41",}} />
        <span style={{fontSize: "1rem", color: "#d2ce41", margin:"20px"}}>5</span>
    </div>
  )
}

export default CartWidget