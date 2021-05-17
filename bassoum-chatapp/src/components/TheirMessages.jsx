const TheirMessages =({ lastMessage, message})=>{
    /*doing this const isfirstmessagebyuser will give me the boolean to know
    if this is the last message from the user*/
     const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        //if it is the firstmessage by user i will && operator and render the div self closing
        <div className="message-row">
            
            {isFirstMessageByUser && (
                <div
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}

                />
            )}



            {message?.attachments?.length>0
                ?(
                   
                  <img
                    /*give that first image of 0 */
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                        
                 />
            ) : (
                <div className="message" style={{float:'left',  backgroundColor: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                    {message.text}
              </div>
           )
         }
            
        </div>
    );
}

export default TheirMessages;