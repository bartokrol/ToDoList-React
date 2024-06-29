import { MainPage } from '../../views/main/MainPage';
import { HistoryPage } from '../../views/history/HistoryPage';
import { LoginPage } from '../../views/login/LoginPage';
import { SettingsPage } from '../../views/settings/SettingsPage';
import { ToDoListPage } from '../../views/toDoList/ToDoListPage';
import { RegistrationPage } from '../../views/registration/RegistrationPage';
import { ErrorPage } from './components/errorPage/ErrorPage';

export const ROUTES = [
    {
        path: '/',
        component: MainPage,
        errorElement: ErrorPage,
    },
    {
        path: '/history',
        component: HistoryPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/settings',
        component: SettingsPage,
    },
    {
        path: '/toDoList',
        component: ToDoListPage,
    },
    {
        path: '/registration',
        component: RegistrationPage,
    },
];
