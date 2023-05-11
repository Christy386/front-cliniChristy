export default function events(ws, setWsMessage){
    // handle connection open event
    ws.current.addEventListener('open', () => {
        console.log('WebSocket connection is open');
        //ws.send('Hello, WebSocket!');
    });

    // handle incoming messages
    ws.current.addEventListener('message', (event) => {
        console.log(`Received message: ${event.data}`);
        setWsMessage(event.data);
    });

    // handle connection close event
    ws.current.addEventListener('close', () => {
        console.log('WebSocket connection is closed');
    });

    // handle connection error event
    ws.current.addEventListener('error', (error) => {
        console.error(`WebSocket error: ${error.message}`);
    });
}