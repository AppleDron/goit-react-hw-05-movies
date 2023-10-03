import { createContext, useContext, useState } from 'react';

export const ContextAlert = createContext();

export const useCustomContext = () => useContext(ContextAlert);

const Context = ({ children }) => {
  const [films, setFilms] = useState(null);

  return (
    <ContextAlert.Provider
      value={{
        films: films,
        setFilms: setFilms,
      }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
