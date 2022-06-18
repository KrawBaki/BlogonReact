import React, { useState } from 'react';
import { todos } from '../../config/data.js';
import TodoItem from './TodoItem';
import classes from './Todo.Modul.css';

const Todo = () => {
    const [value, setValue] = useState('');
    const filtredTodos = todos.filter((todo) => {
        return todo.category.toLowerCase().includes(value.toLowerCase());
    });
    return (
        <div>
            <div className='todo'>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='todo-search'
                    placeholder='Search By Category'
                />
            </div>
            <div className='todo-list'>
                {filtredTodos.map((todo) => {
                    return <TodoItem key={todo.id} typesTodo={todo} />;
                })}
            </div>
        </div>
    );
};

export default Todo;
