// src/App.js

import React from 'react';
import MyComponentForm from './views/Example/MyComponentForm';
import ListToDo from './views/TODO/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Simple ToDoApp with React Hoi Dan IT
          </p>
        </header>

        {/* <MyComponentForm /> */}
        <ListToDo/>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;