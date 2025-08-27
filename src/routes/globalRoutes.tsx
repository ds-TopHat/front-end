import {
  HomePage,
  LoginPage,
  MyPage,
  ReviewNoteDetailPage,
  ReviewNotesPage,
  SignupPage,
  SolvePage,
  ErrorPage,
} from './lazy';
import { routePath } from './routePath';

export const publicRoutes = [
  {
    path: routePath.LOGIN,
    Component: LoginPage,
  },
  {
    path: routePath.SIGNUP,
    Component: SignupPage,
  },
  {
    path: routePath.HOME,
    Component: HomePage,
  },
  {
    path: routePath.ERROR,
    Component: ErrorPage,
  },
];

export const protectedRoutes = [
  {
    path: routePath.MY,
    Component: MyPage,
  },
  {
    path: routePath.SOLVE,
    Component: SolvePage,
  },
  {
    path: routePath.REVIEW_NOTES,
    Component: ReviewNotesPage,
  },
  {
    path: routePath.REVIEW_NOTE_DETAIL,
    Component: ReviewNoteDetailPage,
  },
];
