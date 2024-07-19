import React from 'react';
import { ModalStylesType } from '../../../../infrastructure/services/model';

interface ToDoListBoxType {
  modalStyles: ModalStylesType;
  value: string;
}

export const ToDoListBox = ({ value, modalStyles }: ToDoListBoxType) => {
    console.log(value);
    console.log(modalStyles);

    return (
        <>
            <h1 className={modalStyles.headerStyles}>{'Header'}</h1>
            <div className={modalStyles.contentStyles}>{value}</div>
        </>

    );
};
