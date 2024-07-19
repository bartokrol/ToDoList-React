import React from 'react';
import styles from './toDoListBox.module.scss';
import { ModalStylesType } from '../../../../infrastructure/services/model';
import { PRIORITIES } from './formData';

interface ToDoListBoxType {
  modalStyles: ModalStylesType;
  value: string;
}

export const ToDoListBox = ({ value, modalStyles }: ToDoListBoxType) => {
    console.log(value);
    console.log(modalStyles);

    return (
        <>
            <h1 className={modalStyles.headerStyles}>{'Add new ToDo'}</h1>
            <div className={modalStyles.contentStyles}>
                <div>
                    {'Priority: '}
                    <div className={styles.priorities}>
                        {PRIORITIES.map(priority => (
                            <>
                                <input
                                    data-css-priority={priority.id}
                                    className={styles.radio}
                                    type='radio'
                                    id={priority.id}
                                    name={'priority'}
                                />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};
