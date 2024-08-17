import React, { useRef } from 'react';

const App = () => {
      const invoiceRef = useRef();

      const handlePrint = () => {
            const printWindow = window.open('', '', 'height=600,width=400');
            const invoiceContent = invoiceRef.current.innerHTML;

            printWindow.document.open();
            printWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              width: 3in; /* Set width to 3 inches */
              overflow: hidden; /* Hide overflow content */
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 4px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
            @media print {
              body {
                margin: 0;
                width: 3in; /* Ensure the width is 3 inches for printing */
              }
              
            }
          </style>
        </head>
        <body>
          ${invoiceContent}
        </body>
      </html>
    `);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
      };

      return (
            <div className="p-4">
                  <button
                        className="p-2 border-2 m-4 rounded-xl bg-black text-white hover:bg-gray-800 font-bold"
                        onClick={handlePrint}
                  >
                        Print Invoice
                  </button>

                  <h1 className="text-center text-red-500 text-4xl">Invoice Printer Pang Reciept</h1>


                  {/* eto lang yung i pri print ko tapos naka hide*/}
                  <div ref={invoiceRef} className="mt-4 hidden">
                        <table className="border-2 border-black w-full">
                              <thead>
                                    <tr>
                                          <th className="p-2">No</th>
                                          <th className="p-2">Description</th>
                                          <th className="p-2">Amount</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td className="p-2">1</td>
                                          <td className="p-2">Service Fee</td>
                                          <td className="p-2">$200</td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default App;
