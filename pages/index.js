import Head from 'next/head'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct, addProduct } from '../store/actions/productAction'
import styles from '../styles/Home.module.scss'
import Product from './Product'
import Header from '../component/header'
import Footer from '../component/footer'


export default function Home() {

  const dispatch = useDispatch();

  const [Update, setUpdate] = useState({ id:null, status:false });
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    description:"",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    let data = {...userInput};
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (userInput.title === "",
      userInput.price === "",
      userInput.description === "",
      userInput.image === "",
      userInput.category === "")
    ) {
      return false;
    }

    if (Update.status){
      dispatch(
        editProduct({
            id: Update.id,
            title: userInput.title,
            price: userInput.price,
            description: userInput.description,
            // image: userInput.image,
            category: userInput.category,
          })
        );
        alert("Product edited successfull")
      } else {
        dispatch( 
          addProduct({
            id: Update.id,
            title: userInput.title,
            price: userInput.price,
            description: userInput.description,
            image: userInput.image,
            category: userInput.category,
          })
        );
        alert("Product added successfull")
      }

      setUserInput({
        title: "",
        price: "",
        description:"",
        image: "",
        category: "",
      });
      setUpdate({ id:null, status: false });
    };

    const handleEdit = (product) => {
      setUserInput({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      });
      setUpdate({ id: product.id, status: true});
      console.log(product.id);
    };

    const OpenPopUp = () => {
      document.getElementById("simpleModal").style.display ='block';
    }

    const ClosePopup = () => {
      document.getElementById("simpleModal").style.display= 'none';
    }

    return (
      <section className="product">
      <div className={styles.container}>
        <Head>
          <title>Product of Fake Store</title>
          <meta name="description" content="product" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <br />

      <div className={styles.button}>  
      <button id="modalBtn" type="button" onClick={OpenPopUp} className={styles.btnAdd}> Create Product </button>
      </div>
      <div id="simpleModal" className={styles.modal} > 
      <div className={styles.contentMdl} >
        
        <div>
        <h3>Input New Product</h3>
        
            <form className={styles.formitem} >
              <label for="title">Title: </label>
              <input className={styles.input} name="title" placeholder="Title..." onChange={handleChange} value={userInput.title} />
        
              <label for="price">Price: </label>
              <input className={styles.input} type="number" name="price" placeholder="0" onChange={handleChange} value={userInput.price} />
        
              <label for="description">Description: </label>
              <textarea className={styles.input} name="description" placeholder="Description..." onChange={handleChange} value={userInput.description} />
        
              <label for="image">Image: </label> 
              <input className={styles.input} name="image" placeholder="a image" onChange={handleChange} value={userInput.image} />
        
              <label for="category">Category: </label>
              <input className={styles.input} name="category" placeholder="Category.." onChange={handleChange} value={userInput.category} />
        
              <div className={styles.button}>
              <button type="button" onClick={handleSubmit} className={styles.btnSubmit}> Add Product </button>
              <button type="button" onClick={ClosePopup} className={styles.btnCancel}> cancel </button>
              </div>
            </form>
        </div>
      </div>
      </div>
      </div>
        <Product handleEdit={handleEdit} />
      
      <Footer />
    
    </section>
  )
}
