import { createRoot, Root } from 'react-dom/client';
import { Modal } from '../../components/modal/Modal';
import { ReactNode } from 'react';

class DialogService {
  private dialogStack = 0;
  private rootsContainer: HTMLDivElement;

  constructor() {
      this.rootsContainer = document.getElementById('dialogs') as HTMLDivElement;
  }

  public openDialog(children: ReactNode) {
      this.handleRootsContainer();

      const rootElement = this.createDialogContainer();
      this.renderDialog(rootElement, children);

      this.dialogStack++;
  }

  public closeDialog(root: Root) {
      root.unmount();

      this.dialogStack--;

      this.removeDialogContainer();
  }

  private createDialogContainer() {
      const rootElement = document.createElement('div');
      rootElement.id = `dialog_root_${this.dialogStack}`;

      this.rootsContainer.appendChild(rootElement);

      return rootElement;
  }

  private removeDialogContainer() {
      const rootElement = this.rootsContainer.querySelector(`#dialog_root_${this.dialogStack}`) as Element;
      this.rootsContainer.removeChild(rootElement);
  }

  private renderDialog(rootElement: HTMLDivElement, children: ReactNode) {
      const root = createRoot(rootElement);

      root.render(
          <Modal root={root}>
              {children}
          </Modal>);
  }

  private handleRootsContainer() {
      if (!this.rootsContainer) {
          this.rootsContainer = document.getElementById('dialogs') as HTMLDivElement;
      }
  }
}

export const dialog = new DialogService();
