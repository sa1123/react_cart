import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            // {
            //     price: 99,
            //     title: 'Watch',
            //     qty: 0,
            //     img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            //     id: 1
            // },
            // {
            //     price: 999,
            //     title: 'Phone',
            //     qty: 0,
            //     img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
            //     id: 2
            // },
            // {
            //     price: 9999,
            //     title: 'Laptop',
            //     qty: 0,
            //     img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80',
            //     id: 3
            // }
      ],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount () {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })
    //   })

    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data())
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false
      })
    })
  }

  handleIncreaseQuantity = (product) => {
      console.log('increase', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if(this.getCartCount() > 98){
        return;
      }

      // products[index].qty += 1;

      // this.setState({
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id)

      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('Updated');
        })
        .catch((error) => {
          console.log('Error ', error);
        })
  }
  handleDecreaseQuantity = (product) => {
      console.log('decrease', product.qty-1);
      const {products} = this.state;
      const index = products.indexOf(product);

      // if(products[index].qty !== 0){
      //     products[index].qty -= 1;
      // }

      // this.setState({
      //     products
      // })

      const docRef = this.db.collection('products').doc(products[index].id)

      if(products[index].qty !== 0){
        docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('Updated');
        })
        .catch((error) => {
          console.log('Error ', error);
        })
      }

  }
  onDeleteProduct = (id) => {
      const {products} = this.state;
      // const items = products.filter((item) => item.id !== id);

      // this.setState({
      //     products: items
      // })

      const docRef = this.db.collection('products').doc(id)

      docRef
        .delete()
        .then(() => {
          console.log('Deleted');
        })
        .catch((error) => {
          console.log('Error ', error);
        })
  }

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.qty * product.price;
      return null;
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 3,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('Product added', docRef);
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }

  render() {
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct}>Add a Product</button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.onDeleteProduct}
        />
        {loading && <h1>Loading</h1>}
        <div style={{fontSize: 20}}>Total = ₹{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;