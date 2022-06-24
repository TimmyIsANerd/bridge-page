import React, { useState } from 'react';

export const GlobalContext = React.createContext({
    showModal:false,
    showModalSwitch:()=>{}
})


const GlobalContextProvider = (props) => {
    const [modalState, setShowModalState] = useState(false);

    const showModalHandler = () => {
        if(!modalState){
            setShowModalState(true);
        } else {
            setShowModalState(false);
        }
    }

    return(
        <GlobalContext.Provider
            value={{
                showModal:modalState,
                showModalSwitch:showModalHandler
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;