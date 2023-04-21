import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [model, setModel] = useState('');

  const switchScreen = (elem) => {
    setModel(elem);
  };
  return (
    <DataContext.Provider value={{ model, switchScreen }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
