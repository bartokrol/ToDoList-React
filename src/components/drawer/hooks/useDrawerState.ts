import { useEffect, useState } from 'react';
import { useDrawerStateType } from '../index.model';

export const useDrawerState = ({ isOpen, dialogRef, closeAction }: useDrawerStateType) => {
    const [isInitialized, setIsInitialized] = useState(false);

    const handleOnCancelEvent = (e: Event) => {
        e.preventDefault();

        closeAction();
    };

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.addEventListener('cancel', handleOnCancelEvent);

            dialogRef.current?.showModal();
            setIsInitialized(true);
        }

        if (!isOpen) {
            setIsInitialized(false);

            setTimeout(() => {
                dialogRef.current?.close();
            }, 400);

            dialogRef.current?.removeEventListener('cancel', handleOnCancelEvent);
        }
    }, [isOpen]);

    return isInitialized;
};
