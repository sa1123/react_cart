import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/2838/2838694.png" alt="cart-icon"/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        display: 'block',
        float: 'left',
        clear: 'both',
        borderRadius: '50%',
        padding: '1px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default Navbar;