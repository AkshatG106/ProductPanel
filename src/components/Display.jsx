// import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Display() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://65eaab35c9bf92ae3d3be3a5.mockapi.io/products")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://65eaab35c9bf92ae3d3be3a5.mockapi.io/products/${id}`)
      .then(() => getData());
  };

  const toLocalStorage = (id,productName,price,rating) => {

  }

  return (
    <div className=" overflow-auto w-full">
      <div className="flex justify-between">
        <h1 className="text-[50px]">PRODUCT DATA</h1>
        <Link to="/">
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-6 mt-3 rounded-lg mx-4">
            <HiUserAdd className="text-xl" />
          </button>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 shadow-xl my-6 border">
        <thead>
          <tr className=" text-left bg-gray-200 text-black">
            <th className="py-3 px-6 text-center">image</th>
            <th className="py-3 px-6 text-center">Product Title</th>
            <th className="py-3 px-6 text-center">Points</th>
            <th className="py-3 px-6 text-center">Rating</th>
            <th className="py-3 px-6 text-center">category</th>
            <th className="py-3 px-6 text-center">Upadate/Delete</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {data.map((item, i) => (
            <>
            <tr key={i}>
              <td className="py-3 px-6 text-center">
                <img
                  src={item.image}
                  alt="..."
                  className="mx-auto w-[100px] h-[100px]"
                />
              </td>
              <td className="py-3 px-6 text-center">{item.productName}</td>
              <td className="py-3 px-6 text-center">{item.price}</td>
              <td className="py-3 px-6 text-center">{item.rating}</td>
              <td className="py-3 px-6 text-center">{item.category}</td>
              <td className="flex justify-center pt-9">
                <div
                  onClick={() => handleEdit(item.id)}
                  className="bg-green-700 hover:bg-green-900 text-white w-[50px] h-[50px] p-[15px] font-bold rounded-lg focus:outline-none focus:shadow-outline text-xl"
                ><Link onClick={() => {
                  toLocalStorage(
                    item.id,
                    item.productName,
                    item.price,
                    item.rating,
                    item.category,
                  );
                }}>
                  <FaEdit />
                  </Link>
                </div>
                <div
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white ml-4 w-[50px] h-[50px] p-[15px] font-bold rounded-lg focus:outline-none focus:shadow-outline text-xl"
                >
                  <MdDelete />
                </div>
              </td>
            </tr>
            <hr />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
