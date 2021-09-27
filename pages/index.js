import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editProduct, addProduct } from '../store/actions/productAction'
import styles from '../styles/Home.module.css'
import Product from './Product'

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
            image: userInput.image,
            category: userInput.category,
          })
        );
        alert("Product edited successfull")
      } else {
        dispatch( 
          addProduct({
            id: uid(),
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
    };

    //  const {products} = useSelector(state=>state.post)

    return (
      <section className="product">
      <div className={styles.container}>
        <Head>
          <title>Product of Fake Store</title>
          <meta name="description" content="product" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Input New Product</h1>

        <div>
            <form className={styles.formitem} >
              <label for="title">Title: </label>
              <input className={styles.input} name="title" placeholder="Title..." onChange={handleChange} value={userInput.title} />
          <span/>
              <label for="price">Price: </label>
              <input className={styles.input} name="quantity" placeholder="0" onChange={handleChange} value={userInput.price} />
          <span/>
              <label for="description">Description: </label>
              <textarea className={styles.input} name="description" placeholder="Description..." onChange={handleChange} value={userInput.description} />
          <span/>
              <label for="image">Image: </label>
              <input className={styles.input} name="image" placeholder="a image" onChange={handleChange} value={userInput.image} />
          <span/>
              <label for="category">Category: </label>
              <input className={styles.input} name="category" placeholder="Category.." onChange={handleChange} value={userInput.category} />
          <span/>
              <button type="button" onClick={handleSubmit} className={styles.button}> Add Product </button>
            </form>
        </div>

        {/* {products && products.map((item) => <h1 key={item}>{item}</h1>)} */}

        <Product />
      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </section>
  );
};
