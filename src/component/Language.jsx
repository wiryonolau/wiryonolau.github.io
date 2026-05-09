import { useState, useContext, createContext } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = function LanguageContextProvider({
    children,
}) {
    const [language, setLanguage] = useState("en-US");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = function useLanguage() {
    const context = useContext(LanguageContext);
    return context;
};
