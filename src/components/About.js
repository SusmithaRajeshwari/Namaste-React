import User from "./User"
import UserClass from "./UserClass"
const About = () =>{
    return(
        <div>
            <h1>About Page</h1>
            <User name={"Susmitha function"} location={"Trichy"}/>
            <UserClass name={"Susmitha Class"} location={"Trichy"}/>
        </div>
    )
}

export default About