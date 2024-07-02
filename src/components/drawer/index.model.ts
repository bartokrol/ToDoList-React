import { MutableRefObject, ReactNode } from 'react';

interface DrawerTypes {
  dialogRef: MutableRefObject<HTMLDialogElement> | MutableRefObject<null>;
  closeAction: () => void;
  children: ReactNode;
  isOpen: boolean;
}

export type DrawerType = DrawerTypes;

export interface useDrawerStateType {
  closeAction: DrawerTypes['closeAction'];
  dialogRef: DrawerTypes['dialogRef'];
  isOpen: DrawerTypes['isOpen'];
}
