import { createRoot, Root } from 'react-dom/client';
import React, { MutableRefObject, useCallback, useRef } from 'react';

const Modal = ({ id, root }: { id: number, root: Root }) => {
    const dialogElementRef = useRef() as MutableRefObject<HTMLDialogElement>;

    const dialogRef = useCallback((dialog: HTMLDialogElement) => {
        if (dialog) {
            dialogElementRef.current = dialog;
            dialog.showModal();
        }
    }, []);

    const handleOpen = () => {
        modal.renderModal();
    };

    const handleClose = () => {
        dialogElementRef.current.close();
        modal.closeModal(root);
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
            <button onClick={handleOpen}>{'Dodaj nowe ToDo'}</button>
            <div>{id}</div>
        </dialog>
    );
};

class ModalService {
  private modalStack = 0;
  private rootsContainer: HTMLDivElement;

  constructor() {
      this.rootsContainer = document.getElementById('modals') as HTMLDivElement;
  }

  public renderModal() {
      this.handleRootsContainer();

      const rootElement = document.createElement('div');

      rootElement.id = `modal_root_${this.modalStack}`;

      this.rootsContainer.appendChild(rootElement);

      const root = createRoot(rootElement);

      root.render(<Modal root={root} id={this.modalStack} />);

      this.modalStack++;
  }

  public closeModal(root: Root) {
      root.unmount();

      this.modalStack--;

      const rootElement = this.rootsContainer.querySelector(`#modal_root_${this.modalStack}`) as Element;

      this.rootsContainer.removeChild(rootElement);
  }

  private handleRootsContainer() {
      if (!this.rootsContainer) {
          this.rootsContainer = document.getElementById('modals') as HTMLDivElement;
      }
  }
}

export const modal = new ModalService();
