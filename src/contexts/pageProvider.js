import { createContext, useState } from 'react';

const PageContext = createContext();

function PageProvider({ children }) {
    const [active, setActive] = useState('home');

    const value = {
        active: active,
        onClick: (id) => {
            setActive(id);
        },
    };

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export default PageProvider;
export { PageContext };
