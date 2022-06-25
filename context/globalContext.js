import React, { useState } from 'react';

export const GlobalContext = React.createContext({
    showModal:false,
    showModalSwitch:()=>{},
    walletConnected:false,
    walletConnectSwitch:()=>{},
    showDisconnectModal:false,
    showDisconnectModalSwitch:() => {},
    noWalletModal:false,
    showNoWalletModalSwitch:() => {},
})


const GlobalContextProvider = (props) => {
    const [modalState, setShowModalState] = useState(false);
    const [isWalletConnected,setIsWalletConnected] = useState(false);
    const [diconnectModalState, setDisconnectState] = useState(false);
    const [nowallet,setNoWallet] = useState(false);

    const showModalHandler = () => {
        if(!modalState){
            setShowModalState(true);
        } else {
            setShowModalState(false);
        }
    }

    const walletStatusHandler = () => {
        if(!isWalletConnected){
            setIsWalletConnected(true);
        } else {
            setIsWalletConnected(false);
        }
    }

    const disconnectWalletHander = () =>{
        if(!diconnectModalState){
            setDisconnectState(true)
        } else {
            setDisconnectState(false)
        }
    }

    const noWalletModalHandler = () =>{
        if(!noWallet){
            setNoWallet(true)
        } else{
            setNoWallet(false)
        }
    }

    return(
        <GlobalContext.Provider
            value={{
                showModal:modalState,
                showModalSwitch:showModalHandler,
                walletConnected:isWalletConnected,
                walletConnectSwitch:walletStatusHandler,
                showDisconnectModal:diconnectModalState,
                showDisconnectModalSwitch:disconnectWalletHander,
                noWalletModal:nowallet,
                showNoWalletModalSwitch:noWalletModalHandler
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;