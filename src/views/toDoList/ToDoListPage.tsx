import styles from './toDoListPage.module.scss';
import { ToDoList } from './components/ToDoList/ToDoList';
import { modal } from '../../components/modal/Modal';

export const ToDoListPage = () => {
    const listOfTodos: string[] = [];

    const handleClick = () => {
        modal.openModal();
    };

    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>{'Dodaj nowe ToDo'}</button>
            <ToDoList listOfTodos={listOfTodos} />
        </div>
    );
};
