import { ReactNode, useCallback, useState } from 'react';
import styles from './tooltipWrapper.module.scss';

interface TooltipWrapperType {
  ParentComponent: ReactNode;
  TooltipComponent: ReactNode;
}

export const TooltipWrapper = ({ ParentComponent, TooltipComponent }: TooltipWrapperType) => {
    const [prepareToOpen, setPrepareToOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleCalculatePosition = (node: HTMLDivElement) => {
        const { x, y, height, bottom, right, left, width, top } = node.getBoundingClientRect();

        const { innerWidth, innerHeight } = window;

    };

    const tooltipRefCallback = useCallback((node: HTMLDivElement) => {
        if (node) {
            console.log(node);
            handleCalculatePosition(node);
        }
    }, []);

    const handleMouseOver = () => {
        setPrepareToOpen(true);
        setTimeout(() => setIsOpen(true), 1000);
    };

    const handleMouseLeave = () => {
    // setPrepareToOpen(false);
    };

    return (
        <>
            <div className={styles.wrapper} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                {ParentComponent}
                {prepareToOpen && (
                    <div
                        ref={tooltipRefCallback}
                        className={styles.tooltip}
                        data-css-is-open={isOpen}
                    >
                        {TooltipComponent}
                    </div>
                )}
            </div>
        </>
    );
};
