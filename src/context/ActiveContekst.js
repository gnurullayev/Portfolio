import React, { createContext,useState } from 'react';

export const ActiveCreateContext = createContext()


function ActiveContekst({children}) {
    const [active, setActive] = useState("home")

    return (
        <>
            <ActiveCreateContext.Provider value={{active, setActive}}>
                {children} 
            </ActiveCreateContext.Provider>
        </>
    );
}

export default ActiveContekst;