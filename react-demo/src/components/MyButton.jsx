import React from 'react';

const my_button = (props) => {
    // This is jsx/react styling format.
    // It looks similar to CSS, but it is NOT CSS and can't be used in places where css is expected
    // Notice camelCased identifiers and quoted values which is NOT css (CSS == hyphen, no quotes)
    const local_style = {
        backgroundColor: "White",
        border: "2px solid blue",
        marginTop: "15px",
        cursor: "pointer",
        boxShadow: "2px 2px 2px",
    };

    return (
        <div>
            {/* This is JSX code, "onClick" is a special JSX event.
                A similar event being emitted by browser JS is "click" event */}
            <button style={local_style} onClick={props.click}>{props.label}</button>
        </div>
    );
};

export default my_button;