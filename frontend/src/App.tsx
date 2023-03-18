import React, { useState } from 'react';

function App() {
    const [domain, setDomain] = useState('');
    const [data, setData] = useState('');



    const handleSubmit = async () => {
        try {
            const res = await fetch('http://localhost:5000/api', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ domain }),
            });
            const data = await res.json();
            setData(JSON.stringify(data));

        } catch (error) {
            console.error('Error encountered while fetching who is data:', error)
        }
    };

    return (
        <div className='App'>
            <h1>WhoIs Information</h1>
            <input
            placeholder='enter url or IP address'
            ></input>
            <button onClick={handleSubmit}>Get Data</button>
            <button onClick={handleSubmit}>Get Data</button>
        </div>
    )

}

export default App;