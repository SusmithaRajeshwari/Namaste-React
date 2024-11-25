import { useEffect, useState } from "react"

const User = () =>{
    const [state , setState] = useState("")
    
    useEffect(()=>{
        fetchData()       
    },[])
    const fetchData = async () =>{
        const data = await fetch(/*'https://api.github.com/users/SusmithaRajeshwari'*/)
        const json = await data.json()
        console.log(json)
        setState(json)
    }
    const {name,bio,location} = state
    return(
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h2>Bio:{bio}</h2>
            <h2>Location:{location}</h2>
            <h3>Email:susmitha.chandramohan@gmail.com</h3>
        </div>
    )
}
export default User