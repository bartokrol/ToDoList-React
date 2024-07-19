import { Root } from 'react-dom/client';
import React, { MutableRefObject, useCallback, useRef } from 'react';
import styles from './modal.module.scss';
import { dialog } from '../../infrastructure/services/dialogService';
import { CloseIcon } from '../closeIcon/CloseIcon';
import { ModalChildrenType } from '../../infrastructure/services/model';

interface ModalType {
  children: ModalChildrenType,
  root: Root
}

export const Modal = ({ children, root }: ModalType) => {
    const dialogElementRef = useRef() as MutableRefObject<HTMLDialogElement>;

    const dialogRef = useCallback((dialog: HTMLDialogElement) => {
        if (dialog) {
            dialogElementRef.current = dialog;
            dialog.showModal();
        }
    }, []);

    const handleClose = () => {
        dialogElementRef.current.close();
        dialog.closeDialog(root);
    };

    const handleEscClose = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            e.preventDefault();

            handleClose();
        }
    };

    return (
        <dialog ref={dialogRef} className={styles.modal} onKeyDown={handleEscClose}>
            <CloseIcon closeAction={handleClose} />
            {children({
                headerStyles: styles.header,
                contentStyles: styles.content,
            })}
        </dialog>
    );
};
