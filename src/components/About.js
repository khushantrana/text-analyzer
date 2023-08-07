import React, { useState } from 'react'

export default function About(props) {

    const [mystyle1, setMystyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    function toggleStyle() {
        if (mystyle1.color === "white") {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            });
        }
        else {
            setMystyle({
                color: "white",
                backgroundColor: "black"
            });
        }
    };
    if ((props.mode === "light" && mystyle1.color === "white") || (props.mode === "dark" && mystyle1.color === "black")) {
        toggleStyle();
    }
    return (
        <div className='container' style={mystyle1}>
            <h1 className='my-4'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle1} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to Use TextUtils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle1} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>The editor on our website is an easy </strong> to use tool for text editing online that doesn’t make its users go through or follow any intricate procedures for editing their text files. Copy-paste your text in the box provided on this tool or upload the text file by browsing it from your device. Use the editing buttons to format the text as per your requirements. Use copy text Button to copy your edited Text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Key Benefits of TextUtils...
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle1} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Easy to Use</strong> There are no technicalities involved with the usage of this tool. You can start using the text editing service on the go as soon as you access this tool.
                            <strong> Fast and Error free editing</strong> The tool is a super-fast service that allows you to edit any text in a matter of a few minutes. It provides the users with an error-free editing facility.
                            <strong> Shows charcter and Word count</strong> This also shows the count of characters and words in the text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle1} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Funtions Available in TextUtils...
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle1} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>There are many funcitons available : </strong> Convert to Uppercase, Convert to Lowercase, Capitalize first letter of every word, Remove extra spaces and Copy the edited text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
