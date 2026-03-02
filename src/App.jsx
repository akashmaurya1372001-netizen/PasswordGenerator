import { useCallback, useState } from "react";
import "./App.css";
import React from "react";
function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState("false");
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklmnbvcxzQWERTYUIOPASDFGHJKLZXCVBNM";
    if (num == true) {
      str = str + "1234567890";
    }
    if (char == true) {
      str = str + "~!@$%^&*";
    }
    for (let i = 1; i <= length; i++) {
      let char = maths.floor(maths.randon() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setpassword(pass);
  }, [length, num, char]);
  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-md px-4 my-16 bg-gray-600">
        <h1 className="text-center text-blue-50 text-md">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-amber-50"
            value={password}
            placeholder="Password"
            readOnly
          />
        </div>
        <div>
          <input 
          type="range"
          min={6}
          max={69}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setlength(e.target.value)}}
           />
           <label className="mx-1.5">Length:{length}</label>
           <input 
           type="checkbox" 
           className="mx-1.5"
           />
           <label >Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
