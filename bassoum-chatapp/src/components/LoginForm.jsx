import {useState} from 'react';
//to make API's calls
import axios from 'axios';

const LoginForm = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')


    const handleSubmit= () =>{

    }


    return(
        //required (its a property that make sure that if i did not enter my username it will not pass)
        <div className="wrapper">
            <div className="form">
                <h1 className="title">BaSsOum Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}
                    className="input" placeholder="Username" required />

                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
                    className="input" placeholder="Password" required />

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Let's Chat</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default LoginForm;