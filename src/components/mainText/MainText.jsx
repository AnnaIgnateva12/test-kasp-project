import React from "react";
import './MainText.css';

const advantages = [
    { title: 'Gaming mode', message: 'Ensures optimal PC performance while you play', id: '1' },
    { title: '100% detection rate', message: 'Never misses a threat', id: '2' },
    { title: 'Cutting-edge cybersecurity', message: 'Runs on AI overseen by world-leading threat analysts', id: '3' }
]

const Main = () => {
    return (
        <main>
            <h1>
                Don’t let malware defeat you
            </h1>
            <div />
            <h2>Protect your devices with <br />a security suite made for gamers</h2>
            <ul>
                {advantages.map((item) =>
                    <li key={item.id}><span className='title'>{item.title}:</span> <span className='message'>{item.message}</span></li>
                )}
            </ul>
        </main>
    )
}

export default Main