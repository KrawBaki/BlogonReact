import React, { useContext } from 'react';
import Chip from '../Chip/Chip';
import { Link } from 'react-router-dom';
import classes from './TodoItem.Modul.css';

const TodoItem = ({ typesTodo, getTodoId }) => {
    return (
        <div className='todo'>
            <img className='img-todo' src={typesTodo.cover} alt='cover' />
            <Chip categoryTitle={typesTodo.category} />
            <p className='todo-title'>{typesTodo.title}</p>
            <p className='description'>{typesTodo.description}</p>
            <div className='todo-info'>
                <div className='info-author'>
                    <img className='avatar' src={typesTodo.authorAvatar} />
                    <div>
                        <p className='authorName'>{typesTodo.authorName}</p>
                        <p className='createdAt'>{typesTodo.createdAt}</p>
                    </div>
                </div>
                <Link to={`/blog/${typesTodo.id}`} className='link'>
                    &#129046;
                </Link>
            </div>
        </div>
    );
};

export default TodoItem;
