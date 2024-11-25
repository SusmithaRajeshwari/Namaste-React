import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name:"dummy",
                bio:"description",
                location:"default",
            }
            
        }       
    }
    async componentDidMount(){
        const data = await fetch(/*'https://api.github.com/users/SusmithaRajeshwari'*/)
        const json = await data.json()
        this.setState({
            userInfo:json
        })
    }
    render(){
        const {name,bio,location} = this.state.userInfo
       
        return(
        <div className="user-card">
             <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h2>Bio:{bio}</h2>
            <h3>Email:susmitha.chandramohan@gmail.com</h3>
        </div>
    )}
}
export default UserClass