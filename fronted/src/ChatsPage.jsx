import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a30d1211-80ea-4b97-8f02-556aec057114',
         props.user.username,
         props.user.secret
         );
    return 
    ( <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage