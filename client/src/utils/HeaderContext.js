import React from 'react';

const HeaderContext = React.createContext();

// Provider 
function HeaderProvider(props) {
    return (
        <HeaderContext.Provider>
            {props.children}
        </HeaderContext.Provider>
    )
}

// Consumer
const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
export { HeaderProvider, HeaderConsumer };