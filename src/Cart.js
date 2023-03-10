import React from "react";
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    handleIncreaseQuantity = (product) => {
        console.log('increase', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log('decrease', product.qty+1);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty !== 0){
            products[index].qty -= 1;
        }

        this.setState({
            products
        })
    }
    handleResetQuantity = (product) => {
        console.log('reset', product)
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty = 0

        this.setState({
            products
        })
    }
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onResetQuantity={this.handleResetQuantity}
                            />
                        )
                })}
            </div>
        );
    }
}

export default Cart;