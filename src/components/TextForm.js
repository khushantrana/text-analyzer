import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    function upperCase() {
        // console.log("Uppercase was clicked");
        let newUppertext = text.toUpperCase();
        setText(newUppertext);
        props.showAlert("Converted to UpperCase!","success");
    };
    function lowerCase() {
        // console.log("Uppercase was clicked");
        let newUppertext = text.toLowerCase();
        setText(newUppertext);
        props.showAlert("Converted to LowerCase!","success");
    };
    function capitalizeEachWord() {
        let newUppertext = "";
        for (let i = 0; i < text.length; i++) {
            if (i === 0 || text[i - 1] === " ") {
                newUppertext += text[i].toUpperCase();
            }
            else newUppertext += text[i];
        }
        setText(newUppertext);
        props.showAlert("Capatilized Each word!","success");
    };
    function copyText() {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard!","success");
    }
    function removeExtraSpaces() {
        let newUppertext = "";
        for (let i = 0; i < text.length; i++) {
            if ((i === 0 || text[i - 1] === " ") && text[i] === " ") {
                continue;
            }
            else newUppertext += text[i];
        }
        setText(newUppertext);
        props.showAlert("Removed Extra Spaces!","success");
    };
    function clearAll() {
        // console.log("Uppercase was clicked");
        setText("");
        props.showAlert("Cleared All!","success");
    };
    function handleOnChange(event) {
        // console.log("on change");
        setText(event.target.value);
    };
    function len_words(){
        let s=text.trim().split(/\s+/);
        let ans =s.length;
        if(s[s.length-1].length===0) ans--;
        return ans;
    };
    return (
        <>
            <div className="container my-4">
                <h1 className='fourth' style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
                <div className="mb-3 my-4" >
                    {/* <label for="myBox" className="form-label">{props.heading}</label> */}
                    <textarea className="form-control" id="myBox" rows="10" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "white" }} onChange={handleOnChange} value={text} placeholder='Enter the text...' ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upperCase}>Convert to Upppercase</button>
                <button disabled={text.length===0} className="btn btn-secondary mx-2  my-1" onClick={lowerCase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-danger mx-2  my-1" onClick={capitalizeEachWord}>Capitalize Every Word</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2  my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-info mx-2  my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-dark mx-2  my-1" onClick={clearAll}>Clear All</button>
            </div>
            <div className="container my-3">
                <div className="second">
                    <h2 className='third'>Your text summary</h2>
                    <p className='first'>{len_words()} words, {text.length} characters </p>
                    <p className='first'>{(0.008 * len_words()).toFixed(4)} minutes to read</p>
                </div>
                <div className="secondd" style={{ color: props.mode === "light" ? "black" : "white" }}>
                    <h2 className='third'>Preview</h2>
                    <p className={`my-4 ${text.length===0 ? "text-muted" :""}`}> {text.length > 0 ? text : "Enter something in the textbox to preview it here..."}</p>
                </div>
            </div>
        </>
    )
}
