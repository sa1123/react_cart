import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render () {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "grey"}}>₹{price}</div>
                    <div style={{color: "grey"}}>QTY: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/9068/9068779.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3177/3177433.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}

export default CartItem;