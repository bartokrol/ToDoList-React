import { ROUTES_PATHS } from '../../../infrastructure/routing/constants';
import loginIcon from '../../../public/svgs/login_icon.svg';
import registrationIcon from '../../../public/svgs/registration_icon.svg';
import settingsIcon from '../../../public/svgs/settings_icon.svg';
import historyIcon from '../../../public/svgs/history_icon.svg';
import todoIcon from '../../../public/svgs/todo_icon.svg';

export const MENU_LINKS = [
    {
        href: ROUTES_PATHS.toDoListPage,
        text: 'todolist',
        svg: todoIcon,
        alt: 'ToDoList Image',
    },
    {
        href: ROUTES_PATHS.loginPage,
        text: 'login',
        svg: loginIcon,
        alt: 'Login Image',
    },
    {
        href: ROUTES_PATHS.registrationPage,
        text: 'registration',
        svg: registrationIcon,
        alt: 'Registration Image',
    },
    {
        href: ROUTES_PATHS.historyPage,
        text: 'history',
        svg: historyIcon,
        alt: 'History Image',
    },
    {
        href: ROUTES_PATHS.settingsPage,
        text: 'settings',
        svg: settingsIcon,
        alt: 'Settings Image',
    },
];
