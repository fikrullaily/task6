import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchproducts } from "../store/actions/productAction";
import Image from "next/image";
import styles from '../styles/Home.module.scss'

const Product = (props) => {
    const { handleEdit } = props;
    const dispatch = useDispatch();
    const  ProductsData = useSelector((state) => state.Products);
    const { loading, error, products } = ProductsData;

    useEffect(() => {
        dispatch(fetchproducts());
    }, []);
    
    const OpenPopUp = () => {
        document.getElementById("simpleModal").style.display ='block';
      }

    return(
        <section className="getproduct">
            {loading
                ? "Loading..."
                : error
                ? error.message
                : products?.map((product) => (
                    <div className={styles.col}>
                       <div className={styles.cardHeader}>
                           <h3>List Products</h3>
                       </div>
                       <table className={styles.list}>
                       <thead className={styles.thead}>
                           <tr className={styles.tr}>
                               <th scope="col">Title</th>
                               <th scope="col">Price</th>
                               <th scope="col">Description</th>
                               <th scope="col">Category</th>
                               <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td key={product.id}>{product.title}</td>
                            <td>$ {product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => OpenPopUp(handleEdit(product))}><img className={styles.btnEdit} src="../img/edit.png"/></button>
                                    <button onClick={() => 
                                    dispatch(
                                        deleteProduct(product.id),
                                        alert("Deleted Product " + product.title )
                                    )    }><img className={styles.btnDelete} src="../img/delete.png" /></button>
                                
                            </td>
                        </tbody>
                        </table>
                    </div>
                    

                ))}
        </section>
    );
};

export default Product;

