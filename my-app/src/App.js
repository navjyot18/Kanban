// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from "./logo.svg";
import "./App.css";
import { MainContainer } from "../src/components/Maincontainer";
import { LeftBar } from "../src/components/Leftbar";

function App() {
  return (
    <div className="App">
      <LeftBar />
      <MainContainer />
    </div>
  );
}

export default App;
