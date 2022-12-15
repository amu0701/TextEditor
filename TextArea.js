
import React, {useState} from 'react'

export default function TextArea(props) {
    const upcase=()=>{
        let newText=text.toUpperCase();
        
        setText(newText);
        props.showAlert(" Your Text has been set to UpperCase","Success");
        console.log("clicked");
        

    }
    const lowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Your Text has been set to LowerCase","Success");
        console.log("clicked");
    } 
    const boldText=()=>{
        <p style={{fontFamily: 'Arial'}}></p>;
        
        setText(text);
        console.log("clicked");
    } 
    const deleteText=()=>{
        let newText=text;
        
        
        setText("");
        console.log("clicked");
        props.showAlert(" Your Text has been Deleted","Success");
    }    

    const handleonclick=(event)=>{
        setText(event.target.value);
    } 
    const [ text , setText] = useState();
    const [mystyle , setmystyle] =useState(
        {
          color:'black',
          backgroundColor:'white'
        }
      );
      const darkMode=()=>{
        console.log('clicked')
        if(mystyle.color==='black'){
          setmystyle({
            color:'white',
            backgroundColor:'black'

            
          })
          setMode("Disable Dark Mode");
          document.body.style.backgroundColor="black";
          props.showAlert("Dark Mode is On","Success");
          
        }
          else{
          setmystyle({
            color:'black',
            backgroundColor:'white'
            })
            setMode("Enable Dark Mode")
            document.body.style.backgroundColor="white";
            props.showAlert("Dark Mode is Off","Success");
          }
        }
      const[mode , setMode]=useState("Enable Dark Mode");
      
    
    
    return (
        <>
        <div className='container' style={mystyle}>
            <h1>{props.heading} </h1>
            <div className="form-floating mb-3">

            <textarea  className="form-control" placeholder="Leave a comment here" style={{height:'200px', backgroundColor: mystyle.color==="black"?"white":"black", color:mystyle.color==="black"?"black":"white"}} value={text} onChange={handleonclick} id="floatingTextarea"  ></textarea>
            </div>
            <button className="btn btn-danger"onClick={upcase}>Set to UpperCase</button>
            <button className='btn btn-danger mx-2' onClick={lowercase}>Set to LowerCase</button>
            <button className='btn btn-dark' onClick={deleteText}>Delete The Text</button>
            <button className='btn btn-danger mx-2' onClick={boldText}>Set to BoldText</button>
            <button className="btn btn-danger" onClick={darkMode}>{mode}</button>

           <div className='conatainer my-3' style={mystyle}>
            <h2>More Specification About the Text</h2>
            <p>234 words  andCharacter</p>
            <h3>Preview Of The Text</h3>
            <p>{text}</p>

            </div>
          </div>
        </>
    )
}

