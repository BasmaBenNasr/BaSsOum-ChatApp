import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessagesDesignFrom = (props) =>{
    /*at first i need to seed the value of my text area input message to be empty*/
    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    

    const handleSubmit = (event) => {
        /*to prevent the browser from refreshing one i click on submit*/
        event.preventDefault();
        //trim if i hove on it i will see that it will remove spaces and bla bla*/
        const text = value.trim();

        if(text.length > 0)
         sendMessage(creds, chatId, {text});
        //return the val to emty
        setValue('');
        

    }

        const handleChange = (event) => {
            setValue(event.target.value);

            isTyping(props, chatId);
        }



        const handleUpload = (event)=> {
            sendMessage(creds, chatId, {files: event.target.files, text:''})
        }

        return(
            <form className="message-form" onSubmit={handleSubmit}>
            <input 
            className="message-input"
            placeholder="Type your message here ..."
            value ={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />

             <label htmlFor="upload-button">
                 <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                 </span>
             </label>
             <input
              type="file"
              multiple={false}
              id="upload-button"
              style={{display: 'none'}}
              onChange={handleUpload}
             
             />

             <button type="submit" className="send-button">
                 <SendOutlined className="send-icon"/>
             </button>
            </form>
        )
    }

export default MessagesDesignFrom;