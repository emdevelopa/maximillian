import React from 'react';

export const Button = ({children}) => {
    return (
        <div>
            <button className="py-3 px-4 rounded text-[18px] font-semibold bg-gradient-to-r from-btnleft to-btnright">{children}</button>
        </div>
    )
}

