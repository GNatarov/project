const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    
        dialogsData: [
            { id: 1, name: 'Gena' },
            { id: 2, name: 'Gosha' },
            { id: 3, name: 'Morten' },
            { id: 4, name: 'Ikena' },
            { id: 5, name: 'Slavik' },
            { id: 6, name: 'Fufik' }
        ],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'STFU' },
            { id: 3, message: 'Okay' },
            { id: 4, message: 'awd' },
            { id: 5, message: 'awd' },
            { id: 6, message: 'erbe34' }
        ],
        newMessageBody: ''
    
}


export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body

            };
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: body }],
                newMessageBody: '',
            }
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;