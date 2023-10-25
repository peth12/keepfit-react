import axios from 'axios';



const register = async (value) => await axios.post('http://localhost:3008/api/' + "register",value)

const login = async (value) => await axios.post('http://localhost:3008/api/' + "login",value)


const currentUser = async (authtoken) => await axios.post('http://localhost:3008/auth/' + "current", {},
{
    headers: {
        authtoken
    }
}
)


export {register , login , currentUser}