import { createContext, useState } from 'react';

const FormToggleContext = createContext({});

export const FormToggleProvider = ({ children }) => {
  const [model, setModel] = useState('');

  const switchScreen = (elem) => {
    setModel(elem);
  };
  return (
    <FormToggleContext.Provider value={{ model, switchScreen }}>
      {children}
    </FormToggleContext.Provider>
  );
};

export default FormToggleContext;
