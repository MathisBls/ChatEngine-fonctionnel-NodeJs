import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return(

        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='PROJECT_ID'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>

    )
}

export default ChatsPage;
