"use client";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";

const TableTwo = () => {
  const [buyurtma, setBuyurtma] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [alert, setAlert] = useState(false);
  const [count, setCount] = useState(10);

  // Order Product get
  useEffect(() => {
    async function getData() {
      const res = await fetch(`http://localhost:3333/get_order`);
      const product = await res.json();
      setBuyurtma(product);
    }
    getData();
  }, []);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "auto", // Modalning 90% ekran enini egallash
            maxWidth: "600px", // Eng katta o'lcham
            margin: "auto", // Markazga centrlash
            paddingTop: "5px",
            borderRadius: "10px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            background: "#1A222C", // Markazga centrlash
            border: "none",
            height: "40%",
          },
        }}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
      >
        <div className="text-lg font-medium ">
          <h1 className="mt-5 text-2xl text-white pb-2">Mahsulot haqida</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            doloremque quia facere aperiam ipsa soluta totam id, dolor, est
            iusto consequatur suscipit magnam delectus at illo, ipsum hic
            necessitatibus in! Beatae porro quidem nobis ea consectetur ratione
            doloribus expedita, asperiores hic qui ipsa autem assumenda
            perferendis vero quia quis necessitatibus!
          </p>
        </div>
      </ReactModal>
      {alert ? (
        <div
          id="alert-border-2"
          className="flex justify-between items-center pr-2 pl-5 py-2  mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-graydark dark:border-red-800"
          role="alert"
        >
          <div className="text-sm font-medium flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <p className="pl-2">
              Bu buyurtma sotildimi? Bu buyurtmani rostdan ham
              o'chirmoqchimisiz?
            </p>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={(e) => setAlert(false)}
              type="button"
              className="ml-auto bg-red-50 text-red-500 rounded-lg  focus:ring-red-400 hover:bg-red-200 inline-flex justify-end h-8 w-8 dark:bg-transparent dark:text-red-400 "
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <button className=" text-white py-2 px-3 rounded-full hover:bg-red-800 bg-red-700">
              Buyurtmani O'chirish
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  UserName
                </th>
                <th scope="col" className="px-6 py-3">
                  User Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Order day
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b dark:bg-black dark:border-grayBorder  ">
                <td className="w-25 p-2">
                  <div className="flex items-center">
                    <img src="images/product/product-04.png" alt="Image" />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">200$</td>
                <td className="px-6 py-4">Sherzod</td>
                <td className="px-6 py-4">+998940137300</td>
                <td className="px-6 py-4 text-center">
                  12.02.2023 <br />
                  <span className="text-center">19:00</span>
                </td>
                <td
                  onClick={(e) => {
                    openModal();
                  }}
                  className="px-6 py-4 font-medium text-blue-700 dark:text-blue-700 hover:underline cursor-pointer"
                >
                  Mahsulot haqida
                </td>
                <td
                  onClick={(e) => setAlert(true)}
                  className="px-6 py-4 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                >
                  O'lib tashlash
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TableTwo;
