import { MainPage } from '../../views/main/MainPage';
import { HistoryPage } from '../../views/history/HistoryPage';
import { LoginPage } from '../../views/login/LoginPage';
import { SettingsPage } from '../../views/settings/SettingsPage';
import { ToDoListPage } from '../../views/toDoList/ToDoListPage';
import { RegistrationPage } from '../../views/registration/RegistrationPage';

export enum ROUTES_PATHS {
  mainPage = '/',
  historyPage = '/history',
  loginPage = '/login',
  settingsPage = '/settings',
  toDoListPage = '/toDoList',
  registrationPage = '/registration',
}

export const ROUTES = [
    {
        path: ROUTES_PATHS.mainPage,
        component: MainPage,
    },
    {
        path: ROUTES_PATHS.historyPage,
        component: HistoryPage,
    },
    {
        path: ROUTES_PATHS.loginPage,
        component: LoginPage,
    },
    {
        path: ROUTES_PATHS.settingsPage,
        component: SettingsPage,
    },
    {
        path: ROUTES_PATHS.toDoListPage,
        component: ToDoListPage,
    },
    {
        path: ROUTES_PATHS.registrationPage,
        component: RegistrationPage,
    },
];
