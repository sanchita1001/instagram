import { Link } from 'react-router-dom';

const Message = ({ ownMsg, avatar, content, username }) => {
    return (
        ownMsg ?
            content === '❤️' ?
                <span className="self-end text-4xl">{content}</span>
                :
                <span className="self-end text-sm text-white bg-violet-600 px-4 py-3 rounded-3xl max-w-xs">{content}</span>
            :
            content === '❤️' ?
                <div className="flex items-end gap-2 max-w-xs">
                    <Link to={`/${username}`}>
                        <img draggable="false" className="w-7 h-7 rounded-full object-cover cursor-pointer" src={avatar} alt="avatar" />
                    </Link>
                    <span className="items-end text-4xl">{content}</span>
                </div>
                :
                <div className="flex items-end gap-2 max-w-xs">
                    <Link to={`/${username}`}>
                        <img draggable="false" className="w-7 h-7 rounded-full object-cover cursor-pointer" src={avatar} alt="avatar" />
                    </Link>
                    <span className="px-4 py-3 text-sm bg-gray-200 rounded-3xl max-w-xs overflow-hidden">{content}</span>
                </div>
    )
}

export default Message