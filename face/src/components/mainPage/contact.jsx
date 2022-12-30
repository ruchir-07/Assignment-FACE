import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Contact = ({contacts}) => {
    
    const [listItems, setListItems] = useState(20);
    const [isLoading, setIsLoading] = useState(false);
    
//     const getUser = ()=>{
//          axios.get('https://randomuser.me/api?results=500')
//          .then((response)=>{
//             const allNotes = response.data.results
//             setContact(allNotes);
//          })
//          .catch(error=>console.error(`Error: ${error}`))
//     }
  
//    useEffect(()=>{
//     getUser()
//    },[])

  return (
    <div>
    
<section class="main-section">
{
    contacts.slice(0,listItems).map((data,index)=>{
        return(
            <div class="profile-card" key={index}>
            <div class="profile-image">
              <img class="profile-picture" src={data.picture.thumbnail}/>
            </div>
            <div class="profile-contact-name">
              {data.name.first + " "+data.name.last}
            </div>
            <div class="profile-details">
              <p>
                <i class="fa fa-envelope"></i>
                <a href="mailto:abc@abc.com">{data.email}</a>
              </p>
              <p>
                <i class="fa fa-phone"></i>
                <a href="tel:9898989898">{data.cell}</a>
              </p>
        
            </div>
          </div>
        )
    })
}
  
</section>
<button onClick={() => setListItems(listItems + 10)} >Show more...</button>
    </div>
  )
}

export default Contact