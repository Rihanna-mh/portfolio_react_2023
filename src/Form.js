// import logo from './logo.svg';
//use 047_MyServer.js file in Nodejs folder as the server
import './App.css';
import React, { useEffect, useState } from "react";

function MyForm(props) {
    var [f_name,set_f_name] = useState(""); 
    var [l_name,set_l_name] = useState(""); 
    var [e_mail,set_e_mail] = useState(""); 
    var [mes_sub,set_mes_sub] = useState(""); 
    var [mes_text,set_mes_text] = useState(""); 
   

    function form_submit(e){
        e.preventDefault();
        var my_post_body = { first_name: f_name, last_name: l_name, email: e_mail, message_subject:mes_sub, message_text: mes_text}
        console.log(my_post_body);
        // make request
        fetch("http://localhost:8083/data", {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(my_post_body),
        })
        
    }
    return (
    
        <div className="Form row">
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <form  onSubmit={event => form_submit(event)}>
                    <h2 id={props.contactformid} className="text-light">Contact Form</h2>
                    <p className="text-light">Please fill in the contact inquiry form below. I will get back to you shortly by email. Thank you!</p>
                    <label className="text-light">Name:</label>
                        <input id='first_name' type='text' className="form-control" placeholder="First" value={f_name} onChange={(event) => set_f_name(event.target.value)} />
                        <br></br>
                        <input id='last_name' type='text' className="form-control" placeholder="Last" value={l_name} onChange={(event) => set_l_name(event.target.value)} />
                    <br></br>
                    <label className="text-light">Email:</label>
                    <input id='email' type='text' className="form-control" placeholder="example@example.com" value={e_mail} onChange={(event) => set_e_mail(event.target.value)} /><br/>
                    <label className="text-light">Message Subject:</label>
                    <input id='message_subject' type='text' className="form-control" placeholder="Request" value={mes_sub} onChange={(event) => set_mes_sub(event.target.value)} /><br/>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" className="text-light">Message Text:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message here" rows="3" value={mes_text} onChange={(event) => set_mes_text(event.target.value)}></textarea>
                    </div>
                    <br/>
                    <input type='submit' value="Send Message" className='btn btn-secondary'/>
                    <br></br>
                    <br></br>
                </form>
            </div>
            <div className='col-md-4'></div>
            {/* <p>The data you submitted is: {f_name} + {l_name}</p> */}
        </div>
      );
    }
    
    export default MyForm;