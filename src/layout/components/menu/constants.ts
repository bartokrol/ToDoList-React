import { ROUTES_PATHS } from '../../../infrastructure/routing/constants';
import loginLogo from '../../../public/svgs/login_logo.svg';
import registrationLogo from '../../../public/svgs/registration_logo.svg';
import settingsLogo from '../../../public/svgs/settings_logo.svg';
import historyLogo from '../../../public/svgs/history_logo.svg';

export const MENU_LINKS = [
    {
        href: ROUTES_PATHS.loginPage,
        text: 'login',
        svg: loginLogo,
        alt: 'Login Image',
    },
    {
        href: ROUTES_PATHS.registrationPage,
        text: 'registration',
        svg: registrationLogo,
        alt: 'Registration Image',
    },
    {
        href: ROUTES_PATHS.historyPage,
        text: 'history',
        svg: historyLogo,
        alt: 'History Image',
    },
    {
        href: ROUTES_PATHS.settingsPage,
        text: 'settings',
        svg: settingsLogo,
        alt: 'Settings Image',
    },
];
