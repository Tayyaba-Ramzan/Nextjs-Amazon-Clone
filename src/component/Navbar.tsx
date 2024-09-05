import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav-logo border">
                        <div className="logo"></div>
                    </div>
                    <div className="nav-address border">
                        <p className="add-first">Deliver to</p>
                        <div className="add-icon">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="add-second">Pakistan</p>
                        </div>
                    </div>
                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input" />
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className="nav-singing border">
                        <span><p>Hello, sign in</p></span>
                        <p className="nav-second">Accoutn & List</p>
                    </div>
                    <div className="nav-return border">
                        <span><p>Returns</p></span>
                        <p className="nav-second">& Order</p>
                    </div>
                    <div className="nav-cart border">
                        <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#fff', fontSize: '24px' }} />
                        Cart
                    </div>
                </div>
            </header>
        </>
    )
}