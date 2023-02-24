import React ,{useState}from 'react'

export default function Textarera(props) {
    const click =() => {
           console.log("already clicked" + text);
           let newText = text.toUpperCase();
           setText(newText);
           props.showAlert("convert to Upper Case case","primary")
    }
    const click2=() =>{
      let lowerText= text.toLowerCase();
      setText(lowerText);
      props.showAlert("convert to Upper Case case","warning")
    }
    const change =(event) =>{
        console.log("change sucessfully");
        setText(event.target.value);
    }
    const preview =()=>{
             document.getElementById("preview").innerHTML=text
            
    }
    const  clear= ()=> {
         let one ="";
         setText(one)
    }
    const inevrse = () =>{
      let a = text
      const reversedStr = a.split("").reverse().join("");
       document.getElementById("inverse").innerHTML= reversedStr;
    }

    const copyy = () =>{
      let S= document.getElementById("mybox");
      S.select();
      S.setSelectionRange(0,9999);
      navigator.clipboard.writeText(S.value);
    }

    const remov =() =>{
      let newTt = text.split(/[ ]+/)
      setText(newTt.join(" "))
    }
    const [text,setText] =useState("Enter text here");
  return (
    <>
     <div className="container my-4">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={change} id="mybox" rows="8"></textarea>
      </div>
      <div className="btn btn-primary mx-2" onClick={click}>Conver text to Capital</div>
      <div className='btn btn-success mx-2' onClick={click2}>Covert to lower case</div>
      <div className="btn btn-dark text-light mx-2" onClick={preview}>Preview</div>
      <div className="btn btn-danger mx-2" onClick={clear}>Clear</div>
      <div className='btn btn-secondary mx-2' onClick={inevrse}>Inverse String</div>
      <div className="btn btn-warning mx-2" onClick={copyy}>Copy Text</div>
      <div className="btn btn-warning mx-2" onClick={remov}>Remove extra spaces</div>

     
      
    </div>
    <div className="container my-3">
      <h1>Summary of Text area </h1>
      <p>{text.split(" ").length} words , {text.length} charcters</p>
      <p>{text.split(".").length} Number of sentence</p>
      <p>{0.008 *text.split(" ").length} Time to read a word</p>
      <p id="preview" className="container"></p>
      <p id='inverse' className="container bg-dark text-light"></p>
    </div>
    </>
  )
}