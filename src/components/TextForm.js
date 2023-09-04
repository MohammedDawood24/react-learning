import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnTextChange = (event) => {
        let newText = event.target.value;
        setText(newText);
    }
    
    const convertTextUpper = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper case..!", "success");
    }
    const convertTextLower = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower case..!", "success");
    }
    const copyText = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard..!", "success");
    }
    const clearText = () => {
        setText('');
        props.showAlert("Text cleared..!", "success");
    }

    const getWordCount = (word)=>{
        if (word.length > 0){
            return word.trim().split(" ").length;
        }else {
            return 0;
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h2>Enter text in the below box:</h2>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnTextChange} name='myBox' rows="8" placeholder='Enter text here'></textarea>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={convertTextUpper}>Convert text to uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={convertTextLower}>Convert text to lowercase</button>
                    <button className="btn btn-primary" onClick={copyText}>Copy text</button>
                    <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h2>Your text summary</h2>
                    <p>{getWordCount(text)} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes of reading</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
