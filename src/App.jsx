import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Index';
import Home from './pages/Home';

const App = () => {
    const [todo, setTodos] = useState();
    function todoItem(td) {
        setTodos(td);
    }
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home showTodo={todoItem} />} />
                <Route path='/blog/:id' element={<Blog todoSelect={todo} />} />
            </Routes>
        </div>
    );
};

export default App;
