import React, { createContext, useState } from 'react';

const MyContext = createContext({});
export default MyContext;

// eslint-disable-next-line react/prop-types
export function MyProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyContext.Provider value={{
      isVisible,
      handleClick,
    }}
    >
      {children}
    </MyContext.Provider>
  );
}
