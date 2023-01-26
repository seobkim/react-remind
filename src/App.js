import Hello from "./component/Hello";
import "./App.css";
import Wrapper from "./component/Wrapper";
import Counter from "./component/Counter";
import InputSample from "./component/InputSample";
import InputSample2 from "./component/InputSample2";
function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "25px",
    padding: "1rem",
  };
  return (
    <>
      {/* 주석 */}
      <Wrapper id="123">
        <Hello name="react" color="red" isSpecial={true} />
        <Hello />
        <Counter />
        <InputSample />
        <InputSample2 />
      </Wrapper>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
