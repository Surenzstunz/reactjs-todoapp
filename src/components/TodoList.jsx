import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todos = [], handleEditTodo, handleDeleteTodo }) {
    return (
        <ul className='main'>
            {todos.length > 0 ? (
                todos.map((todo, todoIndex) => (
                    <TodoCard 
                        key={todoIndex} 
                        index={todoIndex} 
                        handleEditTodo={handleEditTodo} 
                        handleDeleteTodo={handleDeleteTodo}
                    >
                        <p>{todo}</p>
                    </TodoCard>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </ul>
    );
}
