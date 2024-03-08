// import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function AddProduct() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/products", {
        productName: product,
        price: price,
        rating:rating,
        category: category,
        image: image,
      })
      .then(() => {
        navigate('/display')
        alert("data added");
        setProduct("");
        setPrice();
        setRating()
        setCategory("");
        setImage('');
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 bg-white shadow-lg shadow-gray-500 rounded-lg px-10 py-8 mb-8 text-lg text-black"
      >
        <h1 className="text-[50px] mb-9 text-center">Add Products</h1>
        <label className="block text-black font-bold mb-2 text-xl">
          Enter Product Name :{" "}
        </label>
        <input
          type="text"
          placeholder="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        />
        <br />
        <br />
        <label className="block text-black font-bold mb-2 text-xl">
          Enter Product Points :{" "}
        </label>
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        />
        <label className="block text-black mt-7 font-bold mb-2 text-xl">
          Enter Product Rating :{" "}
        </label>
        <input
          type="number"
          placeholder="Product Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        />
        <br />
        <br />
        <label className="block text-black font-bold mb-2 text-xl">
          Category :{" "}
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        >
          <option>Select</option>
          <option>Smart Phone</option>
          <option>Laptops</option>
          <option>Perfumes</option>
          <option>Bags</option>
          <option>Water Bottle</option>
        </select>
        <br />
        <br />
        <label className="block text-black font-bold mb-2 text-xl">
          Select Image :
        </label>
        <input type="text" placeholder="Enter Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="shadow shadow-gray-300 mt-3  appearance-none border rounded-lg w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline "/>
        <br />
        <br />
        <button
          type="submit"
          className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl"
        >
          Add Product
        </button>
        <Link to='/display'><button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline text-xl"
        >
          View
        </button>
        </Link>
      </form>
    </div>
  );
}

export default AddProduct;
