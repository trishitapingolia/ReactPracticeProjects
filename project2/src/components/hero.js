import Button from "./Button/button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

function Hero() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Text, setText] = useState("");
    
    const OnSubmit=(e)=>{
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);

        let message=
        alert("Name: "+Name+"\nEmail: "+Email+"\nMessage: "+Text);
    }



    return ( 
        <div className="container d-flex flex-column p-5">
            <h1>Contact Us</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            <div className="container d-flex justify-content-center">
                <div className="container d-flex flex-column gap-4 p-5">
                    <div className="container d-flex gap-4">
                        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="15px" />}/>
                        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="15px" />} />
                    </div>
                    <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
                    <form className="d-flex flex-column gap-4" onSubmit={OnSubmit}>
                        <label htmlFor="Name" style={{position:"absolute", top:"410px", left:"150px", backgroundColor:"white"}}>Name</label>
                        <input type="text" className="name" style={{padding:'5px'}}/>
                        <label htmlFor="E-mail"  style={{position:"absolute", top:"471px", left:"150px", backgroundColor:"white"}} >E-mail</label>
                        <input type="email"  className="email" style={{padding:'5px'}}/>
                        <label htmlFor="Text"  style={{position:"absolute", top:"532px", left:"150px", backgroundColor:"white"}} >Text</label>
                        <textarea rows={7}></textarea>
                        <div className="container d-flex justify-content-end">
                            <Button text="SUBMIT" />
                        </div>
                    </form>
                </div>
                <div>
                    <img src="main_img.png" alt="main_img" style={{maxWidth:"700px"}}/>
                </div>
            </div>
        </div>
     );
}

export default Hero;