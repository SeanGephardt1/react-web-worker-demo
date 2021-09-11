let i = 0;
let _timer = undefined;

class Message
{
    constructor( id, idx, d, data )
    {
        this.id = id || -1;
        this.index = idx || 1;
        this.date = d || null;
        this.data = data || "NO DATA";
    }

};

function Count(data)
{   //  console.debug( "Count", i, data );
    i++;
    if ( i < 10 )
    {
        let _m = new Message(
            Math.round( Math.random() * 10000 ),
            i,
            new Date().toISOString(),
            "Message #" + i + " : " + data.id + " : " + data.data );

        console.debug( "_m", _m );
        postMessage( _m );
    }
    else
    {
        clearInterval( _timer );
        _timer = undefined;

        let _done_message = new WorkerMessage();
        postMessage( _done_message );
    }
    return;
};

onmessage = function ( e )
{
    console.debug( 'Worker: Message received from main script', e.data );

    i = 0;
    clearInterval( _timer );
    _timer = undefined;
    _timer = this.setInterval( () => { Count( e.data ) }, 500 );

    return;
}

function ProcessWorkerMessage()
{
    console.debug( "Worker - ProcessWorkerMessage()" );
    return;
};

ProcessWorkerMessage();