import React from 'react';

const user_input = (props) => {
    return (
        <div className="Card">
            <h3>What's your name</h3>
            {/* This is JSX code, "onChange" is a special JSX event.
                A similar event being emitted by browser JS is "keyup" or "change" event */}
            <p>
                <input type="text"
                       onChange={props.inputChanged}
                       value={props.name}/>
            </p>
        </div>
    );
};

export default user_input;
