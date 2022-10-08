import {useState} from 'react';
import './App.css';

function App() {

  const calculatDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>);
    }
    return digits;
  }

  // create a useState for showing resultInput
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");
  const [clear, setClear] = useState(null);


  const secondarybtn = ['%','+','-','*','/','.'];
  const updateCalc = (value)=> {
    if(
      secondarybtn.includes(value) && calc === "" ||
      secondarybtn.includes(value) && secondarybtn.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc + value);
      if(!secondarybtn.includes(value)){
        setResult(eval(calc + value).toString());
      }
  }

  const handleDelete = ()=>{
    if (calc === '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const handleClear = ()=>{
    if(clear === ''){
      return;
    }
    setCalc('');
  };

  const handleCalculate = ()=> {
    setCalc(eval(calc).toString());
  };

  return (
    <div className="App">
      <div className='calculator'>

        <div className='result-display'>
          {result ? <span className='result'>{result}</span> : ""}
          <br/>
           <span className='showInput'>{ calc || "0"}</span>
        </div>

        <div className='secondarybtn'>
          <button onClick={()=>{updateCalc('%')}}>%</button>
          <button onClick={()=>{updateCalc('+')}}>+</button>
          <button onClick={()=>{updateCalc('-')}}>-</button>
          <button onClick={()=>{updateCalc('*')}}>x</button>
          <button onClick={()=>{updateCalc('/')}}>÷</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={handleClear}>CE</button>

        </div>

        <div className='digits-num'>
          <div className='digits'>
            { calculatDigits() }
            <button onClick={()=> updateCalc('.')}>.</button>
            <button onClick={()=> updateCalc('0')}>0</button>
            <button style={{ backgroundColor: "#e90a72", borderRadius: "10px" }} onClick={handleCalculate}>=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
