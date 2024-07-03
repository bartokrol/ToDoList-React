import styles from './toDoListBox.module.scss';

export const ToDoListBox = () => {
    console.log('ToDoListBox');
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <label htmlFor={'toDo'}>{'New ToDo'}</label>
                <button className={styles.refreshButton}>{'Refresh'}</button>
            </div>
            <div className={styles.content}>
                <div>
                    <textarea id={'toDo'} rows={10} cols={50} />
                </div>
            </div>
            <div className={styles.footer}>
                <button className={styles.submitButton}>{'Add ToDo'}</button>
            </div>
        </div>
    );
};
