import { useEffect, useState } from 'react';
import { useDrawerStateType } from '../index.model';

export const useDrawerState = ({ isOpen, dialogRef }: useDrawerStateType) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
            setIsInitialized(true);
        }

        if (!isOpen) {
            setIsInitialized(false);

            setTimeout(() => {
                dialogRef.current?.close();
            }, 400);
        }
    }, [isOpen]);

    return isInitialized;
};
