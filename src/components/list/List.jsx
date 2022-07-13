import React from "react";
import './List.css';

const advantages = [
    { title: 'Gaming mode', message: 'Ensures optimal PC performance while you play', id: '1' },
    { title: '100% detection rate', message: 'Never misses a threat', id: '2' },
    { title: 'Cutting-edge cybersecurity', message: 'Runs on AI overseen by world-leading threat analysts', id: '3' }
]

const List = () => {
    return (
        <div className="ListContainer">
            <ul className="ListUl">
                {advantages.map((item) =>
                    <li className="ListLi" key={item.id}><span className='Title'>{item.title}:</span> <span className='Message'>{item.message}</span></li>
                )}
            </ul>
        </div>
    )
}

export default List