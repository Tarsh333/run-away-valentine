import React, { useEffect, useState } from 'react'
import Please from './Please';
import Yayy from './Yayy';
import './App.css';
import details from './Email';
import emailjs from 'emailjs-com';

const App = () => {
    const [yes, setYes] = useState(null);
    useEffect(() => {
      if(localStorage.getItem('yes!!')!=null){
        setYes(true);
      }
    }, [])
    const lesgoo=(e)=>{
        e.preventDefault();
        setYes(true);
        emailjs.sendForm(`Steins;Gate`, details.TEMPLATE_ID, e.target, details.USER_ID)
            .then((result) => {
                alert("Yayyyyyyy!!!!!!!!", result.text);
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
        localStorage.setItem('yes!!','yayy!');
    }
    
  return (
    <div className='home'>
        {yes==null?<Please lesgoo={lesgoo}/>
        :<Yayy/>}
    </div>
  )
}

export default App