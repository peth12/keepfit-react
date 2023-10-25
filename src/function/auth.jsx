import axios from 'axios';



const register = async (value) => await axios.post('https://keepfit-backend.onrender.com/auth' + "register",value)

const login = async (value) => await axios.post('https://keepfit-backend.onrender.com/auth' + "login",value)


const currentUser = async (authtoken) => await axios.post('https://keepfit-backend.onrender.com/auth/' + "current", {},
{
    headers: {
        authtoken
    }
}
)


export {register , login , currentUser}