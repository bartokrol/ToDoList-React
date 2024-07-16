import React from 'react';

export const ToDoList = ({ listOfTodos }: { listOfTodos: any[] }) => {
    console.log('');

    return (
        <>
            {listOfTodos.length ? listOfTodos.map(todo => {
                console.log(todo);

                return (<div>
                    <div>{todo.priority}</div>
                    <div>{todo.todoTxt}</div>
                    <div>{todo.date.asString}</div>
                </div>);
            }) : (
                <div>
                    {'There is no todos, create some new tasks'}
                </div>
            )}
        </>
    );
};
