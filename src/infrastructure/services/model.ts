import { ReactNode } from 'react';

export type ModalChildrenType = (styles: ModalStylesType) => ReactNode;

export interface ModalStylesType {
  contentStyles: string;
  headerStyles: string;
}
