import { MainPage } from '../../views/main/MainPage';
import { HistoryPage } from '../../views/history/HistoryPage';
import { SignInPage } from '../../views/signIn/SignInPage';
import { SettingsPage } from '../../views/settings/SettingsPage';
import { ToDoListPage } from '../../views/toDoList/ToDoListPage';
import { SignUpPage } from '../../views/signUp/SignUpPage';

export enum ROUTES_PATHS {
  mainPage = '/',
  historyPage = '/history',
  signInPage = '/signIn',
  settingsPage = '/settings',
  toDoListPage = '/toDoList',
  signUpPage = '/signUp',
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
        path: ROUTES_PATHS.signInPage,
        component: SignInPage,
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
        path: ROUTES_PATHS.signUpPage,
        component: SignUpPage,
    },
];
