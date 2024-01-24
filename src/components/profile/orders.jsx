      import React from "react";

      const findDate = ( timestamp ) => {
        const date = new Date(timestamp);
console.log(date);
        // Extracting date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        const day = String(date.getDate()).padStart(2, "0");

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      };

      function Orders({ orders }) {
        
        return (
          <div className="">
            <div className="ml-3  md:ml-3 font-bold mb-3">Orders</div>

            <div className=" overflow-x-auto">
              <div className="max-w-[850px]  ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="pr-6 pl-3  py-3  ">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Details
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment Method
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Payment Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Delivery Status
                      </th>{" "}
                    </tr>
                  </thead>

                  <tbody>
                    {orders?.map((order) => {
                      // console.log(o)
                      return (
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          key={order._id}
                        >
                          <th
                            scope="row"
                            className=" pl-3 py-4 font-medium text-gray-900  dark:text-white text-wrap max-w-5 "
                          >
                            {order._id}
                          </th>
                          <td className="px-6 py-4">
                            {findDate(order.order_date)}
                          </td>
                          <td className="px-6 py-4">Laptop</td>
                          <td className="px-6 py-4">${order.total_amount}</td>
                          <td className="px-6 py-4">Cash On Delivery</td>
                          <td className="px-6 py-4">{order.payment}</td>
                          <td className="px-6 py-4">{order.status}</td>
                        </tr>
                      );})}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }

      export default Orders;
