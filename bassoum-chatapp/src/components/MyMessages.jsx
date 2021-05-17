const MyMessages =({message})=>{

    //i will check if the message is an image if its length is 0 that means
    //its an image by using ?.attachments
    if(message?.attachments?.length>0){
        return(
            <img
            /*give that first image of 0 */
             src={message.attachments[0].file}
             alt="message-attachment"
             className="message-image"
             style={{float: 'right'}}
            
            />
        )
    }

    /*if its not an image so lets return the text message*/
    return(
        <div className="message" style={{float:'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
           {message.text}
        </div>
    )
}

export default MyMessages;