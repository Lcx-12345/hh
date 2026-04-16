// TypeScript React 示例文件
import React from 'react';

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Hello from TypeScript React!</p>
    </div>
  );
};

export default App;
