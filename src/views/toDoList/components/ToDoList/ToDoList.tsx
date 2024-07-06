import React from 'react';

export const ToDoList = ({ listOfTodos }: { listOfTodos: string[] }) => {
    console.log('');

    return (
        <>
            {listOfTodos.map(todo => (
                <div>{'text'}</div>
            ))}
        </>
    );
};
