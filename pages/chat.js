import {useEffect, useState} from "react";
import Pusher from "pusher-js";

export default function Chat() {
    const [username, setUsername] = useState('User ' + (Math.floor(Math.random()*1000000)));
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //Pusher.logToConsole = true;

        const pusher = new Pusher('685398c6163be889d950', {
            cluster: 'us2'
        });

        const channel = pusher.subscribe('grafica');
        channel.bind('venta', function(data) {
            setMessages([...messages, data]);
        });
    });

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/messages', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                message
            })
        });

        setMessage('');
    }

    return (
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)}/>

            <div style={{minHeight: "500px"}}>
                {messages.map(message => {
                    return (
                        <div>
                            <strong>{message.username}</strong>
                            <p>{message.message}</p>
                        </div>
                    )
                })}
            </div>

            <form onSubmit={submit}>
                <input value={message} onChange={e => setMessage(e.target.value)}/>
            </form>
        </div>
    )
}
