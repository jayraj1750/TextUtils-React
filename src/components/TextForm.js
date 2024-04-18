import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been clear", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).filter(element => element!== null && element!== undefined);
        setText(newText.join(" "));
        props.showAlert("Extre spaces removed", "success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#17173d' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#17173d' }}>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? '#17133d' : 'white', color: props.mode === 'dark' ? 'white' : '#17173d' }} id="myBox" rows="8"></textarea>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 " onClick={handleloClick} >Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2 " onClick={handleUpClick} >Convert to Upercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick} >Clear text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#17173d' }}>
                <h1>Your text summary</h1>
                <b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters </b>
                <b>{0.008 * text.split(" ").length} Minutes read</b>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
