import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext)
    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login',
            {
                method: "POST",
                body: JSON.stringify({username,password}),
                headers: {'Content-Type':'application/json'},
                credentials: 'include',
            }
        );
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
            
        }else{
            alert("Wrong");
        }

    }
    if(redirect){
        return <Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={login}>
            <input type="text" placeholder="Username"
            value={username}
            onChange={ev => setUsername(ev.target.value)}></input>
            <input type="password" placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}></input>
            <button>Login</button>
        </form>
    )
}