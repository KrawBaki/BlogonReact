import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Chip from '../../components/Chip/Chip';
import { todos } from '../../config/data';
import { Link } from 'react-router-dom';
import classes from './Index.Module.css';

const Blog = () => {
    const { id } = useParams();
    const [todoItem, setTodoItem] = useState({});

    useEffect(() => {
        let blog = todos.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setTodoItem(blog);
        }
    }, []);

    return (
        <div className='blog'>
            <Link className='back' to='/'>
                &#129044; come back
            </Link>
            <p className='blog-subtitle'>Published {todoItem.createdAt}</p>
            <h1 className='blog-title'>{todoItem.title}</h1>

            <img className='blog-img' src={todoItem.cover} />
            <p className='blog-desr'>{todoItem.description}</p>
        </div>
    );
};

export default Blog;
