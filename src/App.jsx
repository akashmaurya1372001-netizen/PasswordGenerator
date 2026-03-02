import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";
import React from "react";
function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState("false");
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopasdfghjklmnbvcxzQWERTYUIOPASDFGHJKLZXCVBNM";
    if (num) str = str + "1234567890";

    if (char) str = str + "~!@$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, num, char, setpassword]);
  const copyPasswordToClipboard = useCallback(() => {
    const r = passref.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Copy Succesfully");
  });
  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);
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
            ref={passref}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-green-400 px-3 py-0.5"
          >
            Copy
          </button>
        </div>
        <div>
          <div>
            <input
              type="range"
              min={6}
              max={69}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="mx-1.5">Length:{length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mx-1.5"
              defaultChecked={num}
              onChange={() => {
                setnum((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mx-1.5"
              onChange={() => {
                setchar((prev) => !prev);
              }}
            />
            <label>Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
