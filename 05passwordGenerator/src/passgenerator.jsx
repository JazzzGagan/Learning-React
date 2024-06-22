import { useCallback, useEffect, useState, useRef } from "react"


function Gen(){
const[length, setLength] = useState(8)
const[numberAllowed, setnumberAllowed] = useState(false)
const[charAllowed, setcharAllowed] = useState(false)
const[password, setPassword] = useState("")

const referencePass = useRef(null);

const generatePassword = useCallback(() => {
   
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "~!@#$%^&*()-_=+[{]}'`";

    for (let i = 0; i <= length; i++) {
    const char = Math.floor(Math.random() * str.length + 1 );

    pass += str.charAt(char);
    }
    setPassword(pass)

}, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(() => {
    referencePass.current?.select();
    /* passwordRef.current?.setSelectionRange(0, 3) */
    window.navigator.clipboard.writeText.select(password)
  }, [password])

useEffect(() => {
    generatePassword()
}, [length, numberAllowed, charAllowed, generatePassword])



return(

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-lg py-3 px-10">Password Generator</h1>
        <div className="flex shadow-md rounded-md overflow-hidden mb-4">
            <input type="text" 
            className="bg-white outline-none w-full "
            value={password}
            placeholder="yoursecrect"
            readOnly
            ref = {referencePass}

            />
            <button onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input type="range"
                min={6}
                max ={100}
                value={length}
                onChange={(e) => {
                    setLength(e.target.value)
                }}
               
                 />
                 <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked={false}
                onChange={() => {
                    setnumberAllowed(prev => !prev)
                }}
                 />
                 <label>number</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input type="checkbox"
                defaultChecked = {false}
                onChange={() => {
                    setcharAllowed(prev => !prev)
                }}
                
                 />
                 <label>character</label>
            </div>
        </div>
 </div>
    
);

}


export default Gen;