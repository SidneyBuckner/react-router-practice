import './Message.css';
const Message = (props) =>
{
    return (<div className='borders'>
    {props.children}
    </div>);
}
export default Message;