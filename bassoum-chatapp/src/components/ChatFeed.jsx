//It is weird but I think as the docuùmentation said that i dont need to import react
//Chat engine will do everything i need
import MessagesDesignFrom from './MessagesDesignFrom';
import MyMessages from './MyMessages';
import TheirMessages from './TheirMessages';





const ChatFeed = (props) => {
    //this variable will help us destructure the chat app
    const { chats, activeChat, userName, messages } = props;
    //if chats exist then look for chats and the active chats
    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) =>
         chat.people.map((person,index)=> person.last_read === message.id && (
            <div
             key={`read_${index}`}
             className="read-receipt"
             style={{ 
                 float:isMyMessage ? 'right' : 'left',
                 backgroundImage: `url(${person.person.avatar})`
             }}
            
            
            />
        ))
    

   // console.log(chat, userName, messages)

   const renderMessages = () => {
       //i am gonna fetch the messages
       //it will make sure to take the keys from the messages and put them
       const keys = Object.keys(messages); 
        
       
       //now i will render the messages by keys
       return keys.map((key,index) => {
          //now im gonna loop through the messages using their specific keys
           const message = messages[key];
           //i need to know if this is the last message sent
           //so basically i will say that if the index is 0 that means there is no messages
           //so return null otherwise return for me the last message 
           const lastMessageKey = index===0 ? null : keys[index-1];
           //in this i want to know if this is my own message
           //if that userName is the sender userName message
           const isMyMessage = userName === message.sender.username;
           return(

            //in this div return im gonna style and render the messages
               <div key={`msg_${index}`} style={{width: '100%'}}>
                   <div className="message-block">
                       {
                           //if the message is mine return what i put in the component my message 
                           //otherwise its their messages
                           isMyMessage
                           ? <MyMessages message={message}/>
                           : <TheirMessages message={message} lastMessageKey={messages[lastMessageKey]}/>
                       }
                   </div>
                   <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                       {renderReadReceipts(message,isMyMessage)}
                   </div>

               </div>
           )
       })
    }



    if(!chat) return 'It is Loading ...';

    return(
        /*Note that i puted the question mark before the title chat?.title so i can have the chat
        before acccessing to the title variable*/
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=> ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px'}}></div>
            <div className="message-form-container">
                <MessagesDesignFrom {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;
