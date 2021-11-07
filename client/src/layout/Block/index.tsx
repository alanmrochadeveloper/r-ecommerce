import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Block: React.FC<IProps> = ({ children }) => {
  return (<div style={{margin: '1rem', padding: '1rem', backgroundColor: '#ededf4', borderRadius: '0.3rem' }}>
    {children}
  </div>)
}


export default Block;
