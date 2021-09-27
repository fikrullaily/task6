import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchproducts } from "../store/actions/productAction";
import Image from "next/image";

const Product = (props) => {
    const { handleEdit } = props;
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.post);
    const {loading, error, products} = product;

    useEffect(() => {
        dispatch(fetchproducts());
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
        alert("has been deleted");
    };

    return(
        <section className="getproduct">
            {loading
                ? "Loading..."
                : error
                ? error.message
                : products?.map((product) => (
                    <div className="product">
                    <div className="image">
                        <Image src={product.image} alt={product.image}
                            width={200} height={250} />
                    </div>
                    <div className="text">
                        <h3 key={product.id}>{product.title}</h3>
                        <h4>$ {product.price}</h4>
                        <h4>{product.category}</h4>
                    </div>
                    <div>
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>   
                    </div>
                    </div>
                ))}
        </section>
    );
};

export default Product;

