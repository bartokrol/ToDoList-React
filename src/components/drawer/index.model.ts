import { MutableRefObject } from 'react';

interface DrawerTypes {
  dialogRef: MutableRefObject<HTMLDialogElement> | MutableRefObject<null>;
  closeAction: () => void;
  isOpen: boolean;
}

export type DrawerType = DrawerTypes;

export interface useDrawerStateType {
  dialogRef: DrawerTypes['dialogRef'];
  isOpen: DrawerTypes['isOpen'];
}
