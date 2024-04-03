// FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    category: 'Phone',
    numProducts: 1,
    minPrice: 0,
    maxPrice: 1000
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/getDetails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <table border="2">
        <tr>
          <td>
            <label>
              Category:
            </label>
          </td>
          <td>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
              <option value="TV">TV</option>
              <option value="Earphone">Earphone</option>
              <option value="Tablet">Tablet</option>
              <option value="PC">PC</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
      <label>
        Number of Products:
      </label>
          </td>
          <td>

        <input type="number" name="numProducts" value={formData.numProducts} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>

      <label>
        Min Price:
      </label>
          </td>
          <td>
            
        <input type="number" name="minPrice" value={formData.minPrice} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
      <label>
        Max Price:
      </label>

          </td>
          <td>

        <input type="number" name="maxPrice" value={formData.maxPrice} onChange={handleChange} />
          </td>
        </tr>
        <tr>
          <td>
      <label>Submit:</label>
          </td>
          <td>

      <button type="submit">Submit</button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default FormComponent;

// // import { response } from 'express'
// import React, { useEffect, useState } from 'react'

// function App() {

//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>

//     </div>
//   )
// }
// export default App
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
