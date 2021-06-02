import React, { useState } from 'react';

const HeaderContext = React.createContext();

// Provider 
function HeaderProvider(props) {

    /*********** Menu - Mobile ***********/
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = e => {
        setAnchorEl(e.currentTarget)
    };

    const handleMenuItemClick = () => {
        setAnchorEl(null);
    }
    /*********** END Menu - Mobile ***********/

    return (
        <HeaderContext.Provider
            value={{
                anchorEl,
                handleMenuClick,
                handleMenuItemClick
            }}
        >
            {props.children}
        </HeaderContext.Provider>
    )
}

// Consumer
const HeaderConsumer = HeaderContext.Consumer;

export default HeaderContext;
export { HeaderProvider, HeaderConsumer };