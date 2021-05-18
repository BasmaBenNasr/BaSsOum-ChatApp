import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';
import "./App.css";


const projectID = "fd0fee16-26b6-4bed-b3b8-908d42cbade8";

const App = ()=>{
  //if there is no username i need to render only the login
  if(!localStorage.getItem('username')) return <LoginForm />


//when i enter the username then i can see the chat message app (my messages)
    return (
        <ChatEngine
            height="100vh"
            projectID = {projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;