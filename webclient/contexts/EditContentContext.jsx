import React from 'react';

const EditContentContext = React.createContext();

const EditContentContextProvider = (props) =>{
  const {children} = props;
  return (
    <EditContentContext.Provider>
      {children}
    </EditContentContext.Provider>
  );
};

export {EditContentContext, EditContentContextProvider};
