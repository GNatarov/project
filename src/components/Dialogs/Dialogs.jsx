import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'



const Dialogs = (props) => {
    let state = props.messagesPage;
    let messagesElements = state.messagesData.map(m => <Message key={m.id} message={m.message} />)
    let dialogsElements = state.dialogsData.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return ( 
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{ messagesElements }</div>
                    <div className={s.sendMess}>
                        <div><textarea value={newMessageBody} 
                                        placeholder='Enter your message' 
                                        onChange={onSendMessageChange}>
                            </textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;