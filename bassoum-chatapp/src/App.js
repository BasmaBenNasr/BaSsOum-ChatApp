import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import LoginForm from './components/LoginForm';
import ChatFeed from "./components/ChatFeed";

const App = ()=>{
  //if there is no username i need to render only the login
  if(!localStorage.getItem('username')) return <LoginForm/>


//when i enter the username then i can see the chat message app (my messages)
    return (
        <ChatEngine
            height="100vh"
            projectID="21de8b2e-c9e1-4601-a0b6-942a0367252f"
            userName="Basma"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
        />
    );
}

export default App;