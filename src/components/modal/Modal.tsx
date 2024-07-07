import { Root } from 'react-dom/client';
import React, { MutableRefObject, ReactNode, useCallback, useRef } from 'react';
import { dialog } from '../../infrastructure/services/dialogService';

export const Modal = ({ children, id, root }: { children: ReactNode, id: number, root: Root }) => {
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
        <dialog ref={dialogRef} onKeyDown={handleEscClose}>
            <button onClick={handleClose}>{'Zamknij modal'}</button>
            {children}
        </dialog>
    );
};
