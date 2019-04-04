import React from 'react';

function Head(props) {
    return (
        <div>
            <div>
                <span>$</span><span>{props.cost}</span><span>per night</span>
            </div>
            <span>{props.rating} stars</span>
        </div>
    )
}

export default Head;