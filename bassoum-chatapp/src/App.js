import { ChatEngine } from 'react-chat-engine';
import "./App.css";
import ChatFeed from "./components/ChatFeed";
const App = ()=>{
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