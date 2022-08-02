import {createContext, useState} from 'react';

export const NavContext = createContext({});

export const NavProvider = ({children}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <NavContext.Provider
            value={{
                isOpen,
                setOpen,
            }}
        >
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;