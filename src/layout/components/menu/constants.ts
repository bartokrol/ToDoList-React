import { ROUTES_PATHS } from '../../../infrastructure/routing/constants';
import signInIcon from '../../../public/svgs/signIn_icon.svg';
import signUpIcon from '../../../public/svgs/signUp_icon.svg';
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
        href: ROUTES_PATHS.signInPage,
        text: 'sign in',
        svg: signInIcon,
        alt: 'Sign In Image',
    },
    {
        href: ROUTES_PATHS.signUpPage,
        text: 'sign up',
        svg: signUpIcon,
        alt: 'Sign Up Image',
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
