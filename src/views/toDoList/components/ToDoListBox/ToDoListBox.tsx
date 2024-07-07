import React from 'react';

export const ToDoListBox = ({ value }: { value: string }) => {
    console.log(value);

    return (
        <div>{value}</div>
    );
};
