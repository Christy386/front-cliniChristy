import { useEffect, useState, useRef } from 'react';
import wsEvents from './../../utils/wsEvents'

export default function WebSocketExample() {

    const [wsMessage, setWsMessage] = useState('Echoing back:');
    const [i, setI] = useState(1);

    const ws = useRef(null);

    useEffect(() => {
        // create a new WebSocket connection
        ws.current = new WebSocket('ws://localhost:5000');
        // set ws events from './../../utils/wsEvents'
        wsEvents(ws, setWsMessage);
        // cleanup function to close the WebSocket connection

    }, []);

    const send = () => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(i);
            setI(i+1);
            console.log(i)
        } else {
            console.error('WebSocket is not open');
        }
        
    };
    return (
        <div>
            <h1>WebSocket Example</h1>
            <p>Check the console to see the WebSocket events.</p>
            <div>
                <p>{wsMessage}</p>
                <button onClick={send}>Send</button>
            </div>
        </div>
    );
}
