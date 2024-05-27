import { useState } from "react"

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',
            {
                method: "POST",
                body: JSON.stringify({username,password}),
                headers: {'Content-Type':'application/json'}
            }
        )
        if(response.status == 200){
            alert("Registeration Successful")
        } else {
            alert("Registeration Failed")
        }
    }
    return (
        <form className="register" onSubmit={register}>
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