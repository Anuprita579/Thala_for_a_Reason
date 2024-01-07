import React, { useState } from 'react';
import Filter7Icon from '@mui/icons-material/Filter7';

function Thala() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const calculateResult = () => {
        const num = String(input);
        const operations = findOperationsForSeven(num);
    
        if (operations) {
          setResult(`THALA FOR A REASON: ${operations}`);
        }
        else {
          setResult("No combination found to get 7");
        }
    };

      const findOperationsForSeven = (num) => {
        const digits = num.split("").map(Number);
        const operators = ["", "+", "-", "*", "/"];
    
        const calculate = (currentExpression, remainingDigits) => {
          if (remainingDigits.length === 0) {
            return eval(currentExpression) === 7 ? currentExpression : null;
          }
    
          let result = null;
    
          for (const op of operators) {
            const currentDigit = remainingDigits[0];
            const newExpression = currentExpression === "" ? String(currentDigit) : currentExpression + op + currentDigit;
            const newRemainingDigits = remainingDigits.slice(1);

            result = calculate(newExpression, newRemainingDigits);
    
            if (result) {
              break;
            }
          }
    
          return result;
        };
    
        return calculate("", digits);
      };
    

  return (
    <>
        <div className='bg-gradient-to-r from-orange-400 to-yellow-500 text-center p-7 rounded-xl'>
            <h1 className='text-3xl font-bold'>THALA APP</h1> 
            <Filter7Icon className='m-4'/>
            <br />
            <input type="text" value={input} onChange={handleChange} className='border-2 border-black outline-none p-2'/> 
            <button className='bg-yellow-400 p-2 shadow-xl ml-1' onClick={calculateResult}>Submit</button>
            <p className='text-black'> {result}</p>
        </div> 
    </>
  )
}

export default Thala
