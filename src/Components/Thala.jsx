import React, { useState } from 'react';
import Filter7Icon from '@mui/icons-material/Filter7';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Thala() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    const num = String(input);

    if (typeof input === 'string' && input.length === 7) {
      setResult("THALA FOR A REASON");
      return;
    }

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
        return safeEval(currentExpression) === 7 ? currentExpression : null;
      }
      let result = null;
    
      for (const op of operators) {
        const currentDigit = remainingDigits[0];

        const isLeadingZero = currentDigit.toString().startsWith('0');
        const digitToAdd = isLeadingZero ? Number(currentDigit) : currentDigit;
    
        const newExpression = currentExpression === "" ? String(digitToAdd) : currentExpression + op + digitToAdd;
        const newRemainingDigits = remainingDigits.slice(1);
    
        result = calculate(newExpression, newRemainingDigits);
    
        if (result) {
          break;
        }
      }
    
      return result;
    };
    
    const safeEval = (expression) => {
      try {
        return new Function('return ' + expression)();
      } 
      catch (e) {
        return null;
      }
    };
    
    return calculate("", digits);
  };
  

  return (
    <>
        <div className='bg-gradient-to-r from-blue-400 to-blue-200 text-center p-7 rounded-xl'>
            <h1 className='text-3xl font-bold'>THALA APP</h1> 
            <Filter7Icon className='m-4'/>
            <br />
            <input type="text" value={input} onChange={handleChange} className='border-2 border-black outline-none p-2'/> 
            <button className='bg-yellow-400 p-2 shadow-xl ml-1' onClick={calculateResult}>Submit</button>
            <p className='text-black'> {result}</p>
            <p className='text-slate-600'> #thalaforareason</p>
            <h3 className='text-blue-900 font-bold text-xl'>SHARE </h3>
            <WhatsAppIcon> </WhatsAppIcon>
            <TwitterIcon></TwitterIcon>
            <InstagramIcon></InstagramIcon>

        </div> 
    </>
  )
}

export default Thala
