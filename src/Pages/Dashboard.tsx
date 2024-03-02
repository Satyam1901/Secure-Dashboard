import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 w-screen h-screen flex flex-col items-center justify-center text-white'>
    <h1 className="text-4xl font-bold mb-4">Dashboard Page</h1>
    <p>Welcome to protected Dashboard only for authenticated users.</p>
  </div>
  );
};

export default DashboardPage;