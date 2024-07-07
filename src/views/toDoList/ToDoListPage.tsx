import styles from './toDoListPage.module.scss';
import { ToDoList } from './components/ToDoList/ToDoList';
import { dialog } from '../../infrastructure/services/dialogService';
import { ToDoListBox } from './components/ToDoListBox/ToDoListBox';

export const ToDoListPage = () => {
    const listOfTodos: string[] = [];

    const handleClick = () => {
        const toDoListBoxProps = {
            value: 'test',
        };

        dialog.openDialog('modal', <ToDoListBox {...toDoListBoxProps} />);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>{'Dodaj nowe ToDo'}</button>
            <ToDoList listOfTodos={listOfTodos} />
        </div>
    );
};
