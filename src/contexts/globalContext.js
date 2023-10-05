

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
export const GlobalContextProvider = ({ children }) => {
    const [lang, setLang] = useState("ja")

    const value = {
        lang: lang,
        setLang: setLang,
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};
