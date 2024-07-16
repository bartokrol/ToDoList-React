import styles from './toDoListPage.module.scss';
import { ToDoList } from './components/ToDoList/ToDoList';
import { dialog } from '../../infrastructure/services/dialogService';
import { ToDoListBox } from './components/ToDoListBox/ToDoListBox';
import { parseDate } from '../../utils/date';

export const ToDoListPage = () => {
    const listOfTodos: any[] = [
        {
            priority: 'urgent',
            todoTxt: 'this is my todo',
            date: { ...parseDate(7) },
        },
    ];
    console.log(listOfTodos);

    const handleClick = () => {
        const toDoListBoxProps = {
            value: 'test',
        };

        dialog.openDialog(<ToDoListBox {...toDoListBoxProps} />);
    };

    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>{'Dodaj nowe ToDo'}</button>
            <ToDoList listOfTodos={listOfTodos} />
        </div>
    );
};
