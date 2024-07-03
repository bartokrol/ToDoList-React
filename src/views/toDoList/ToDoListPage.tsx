import { ToDoListBox } from './components/ToDoListBox/ToDoListBox';
import styles from './toDoListPage.module.scss';

export const ToDoListPage = () => (
    <div className={styles.container}>
        <ToDoListBox />
    </div>
);
