import {useState} from 'react';
//to make API's calls
import axios from 'axios';



const LoginForm = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();

        const authObject = { 'Project-ID': "fd0fee16-26b6-4bed-b3b8-908d42cbade8", 'User-Name': username, 'User-Secret': password};

        try {
            //if i typed the username and password correctly and this scenrio is succsfull to render after my messafes
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('passowrd', password);

            window.location.reload();



        } catch (error) {
            //when the bad scenario happens means i entered the wrong pass or username or mistyped them
            setError('Please Correct Your Credentials!')
            
        }
    }


    return(
        //required (its a property that make sure that if i did not enter my username it will not pass)
        <div className="wrapper">
            <div className="form">
            <h1 className="title">BaSsOum</h1>
        <h3 className="title2">Chat Application</h3>
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
                    <br></br>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )

}

export default LoginForm;