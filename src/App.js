import './App.css';

function App() {

  const calculatDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  }

  return (
    <div className="App">
      <div className='calculator'>

        <div className='result-display'>
          <span className='showInput'>0</span>
          <br/>
          <span className='result'>(0)</span>
        </div>

        <div className='secondary-btn'>
          <button>%</button>
          <button>+</button>
          <button>-</button>
          <button>x</button>
          <button>÷</button>
          <button>DEL</button>
          <button>CE</button>

        </div>

        <div className='digits-num'>
          <div className='digits'>

            {calculatDigits()}
            <button>.</button>
            <button>0</button>
            <button style={{ backgroundColor: "#e90a72", borderRadius: "10px" }}>=</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
