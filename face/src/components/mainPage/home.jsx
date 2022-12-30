import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Contact from './contact'
import Loading from './Loading'
import { useHistory } from 'react-router-dom'
import './home.css'

const Home = () => {
    const [contacts, setContact] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    
  var x = localStorage.getItem("firstLogin");
    const logoutUser = async () =>{

    
        await axios.get('http://localhost:8000/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }
    const getUser = ()=>{
         axios.get('https://randomuser.me/api?results=500')
         .then((response)=>{
            const allNotes = response.data.results
            setContact(allNotes);
            setTimeout(() => {
                setLoading(false)
            },  1000)
             
         })
         .catch(error=>console.error(`Error: ${error}`))
         setLoading(false);
    }
  
   useEffect(()=>{
    getUser()
   },[])
   const filteredContacts = search.length === 0 ? contacts : 
   contacts.filter(contact => contact.name.first.
               toLowerCase().includes(search.toLowerCase()) || contact.name.last.
               toLowerCase().includes(search.toLowerCase()) )
//    console.log(contacts);
if(loading) return <div><Loading /></div>
  return (
    
    <div>
        
       { x ?
            <div>
             <nav class="topnav">
             <div class="nav-content-container">
               <div><b>500</b> Contacts</div>
             </div>
             <div class="search-container">
               <input type="text" placeholder="Search.." name="search"  value={search}
                               onChange={(e) => setSearch(e.target.value)}/>
               <i class="fa fa-search icon" style={{ textAlign: "center", marginTop: "1rem" , background:"none", color:"white"}}></i>
             </div>
             <div class="nav-content-container">
             <span onClick={logoutUser}>Logout</span>
             </div>
           </nav>
           {loading? <Loading/> :<Contact contacts= {filteredContacts} /> }
           </div>
           : alert("You are not allowed to visit")  }
      </div>
  )
}

export default Home