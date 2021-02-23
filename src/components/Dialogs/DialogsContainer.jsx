import React from 'react'
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'



// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagesPage;
    
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     let onSendMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return <Dialogs updateNewMessageBody={onSendMessageChange}
//                     sendMessage={onSendMessageClick} 
//                     messagesPage={state}/>
        
    
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;