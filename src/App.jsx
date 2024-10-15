import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUsers from './Pages/GetUsers'
import AddUsers from './Pages/AddUsers'
import Update from './Pages/Update'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<GetUsers/>}/>
    <Route path='/add' element={<AddUsers/>}/>
    <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
        </BrowserRouter>
    </>
  )
}
 export default App

// import React, { useState } from "react";
// import "./Style.css";

// const App = () => {
//   let [state, setstate] = useState("X");
//   let [update, setupdate] = useState([]);
//   let [winner,setwinner]=useState("")
//   function check(){
//     let key=[ [0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
//     for(let i=0;i<key.length;i++){
//       let [x,y,z]=key[i]
//       if( update[x]==="X" && update[y]==="X"&& update[z]==="X"){
//         setwinner("X❤️")
//       }
      
//     }  
//   }

//   function counter(index) {
//     check()
//     let arr = [...update];
//     arr[index] = state;
//     setupdate(arr);
    
//     if(state === "X") {
//       setstate("O");
//     } else {
//       setstate("X");
//     }
//   }
//   // console.log(update);
//   // console.log(state);
//   // console.log(winner);

//   return (
//     <div id="container">
//       <div id="heading">
//         TIC-TAC-TOE
//       </div>
//       <div className="row1">
//         <div id="1" className="divs" onClick={() => counter(0)}>
//           {update[0]}
//         </div>
//         <div id="2" className="divs" onClick={() => counter(1)}>
//           {update[1]}
//         </div>
//         <div id="3" className="divs" onClick={() => counter(2)}>
//           {update[2]}
//         </div>
//       </div>
//       <div className="row1">
//         <div id="4" className="divs" onClick={() => counter(3)}>
//           {update[3]}
//         </div>
//         <div id="5" className="divs" onClick={() => counter(4)}>
//           {update[4]}
//         </div>
//         <div id="6" className="divs" onClick={() => counter(5)}>
//           {update[5]}
//         </div>
//       </div>
//       <div className="row3">
//         <div id="7" className="divs" onClick={() => counter(6)}>
//           {update[6]}
//         </div>
//         <div id="8" className="divs" onClick={() => counter(7)}>
//           {update[7]}
//         </div>
//         <div id="9" className="divs" onClick={() => counter(8)}>
//           {update[8]}
//         </div>
//       </div>
//       <div>
//        <p id="winner"> The winner is: {winner}</p>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from "react";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [response, setResponse] = useState({});
//   const [loading, setLoading] = useState(false); // New loading state

//   const api = {
//     key: "14be16dc2c6c6999c8540ebdb355afcc",
//     url: "https://api.openweathermap.org/data/2.5/weather",
//   };

//   function data() {
//     setLoading(true); // Set loading to true when data fetching starts
//     fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`)
//       .then((x) => x.json())
//       .then((res) =>{
//         setResponse(res);
//         setLoading(false); // Set loading to false once data is fetched
//       })
//       .catch((err) => {
//         console.error("Error fetching data: ", err);
//         setLoading(false); // Ensure loading is stopped even if there's an error
//       });
//   }

//   console.log(response);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Enter city name"
//         />
//         <button onClick={data}>Search</button>

//         <div>
//           {/* Conditional rendering based on loading state */}
//           {loading ? (
//             <p>Loading...</p> // Display "Loading..." when fetching data
//           ) : response.name ? (
//             // Once data is fetched, display the result
//             <>
//               <p>City: {response.name}</p>
//               {response.main && <p>Temperature: {response.main.temp} °C</p>}
//             </>
//           ) : (
//             <p>No data available. Please search for a city.</p> // Default message
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

