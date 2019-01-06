export class Sidebar {
    showSidebar = () => {
        this.moveBodyToAnotherDivRoot();
        this.addSidebar();
        this.styleBody();
    };

    hideSidebar = () => {
        this.removeSidebar();
        this.resetBodyStyle();
    };

    private removeSidebar = () => {
        if (this.sideBarContainer) {
            document.body.removeChild(this.sideBarContainer)
        }
    };

    private sideBarContainer: HTMLElement | null = null;
    private addSidebar = () => {
        this.sideBarContainer = document.createElement('div');
        this.sideBarContainer.id = 'sidebarContainer';
        const sidebarEl = document.createElement('div');
        sidebarEl.id = 'sidebar';

        this.sideBarContainer.appendChild(sidebarEl);
        document.body.appendChild(this.sideBarContainer);
    };

    private moveBodyToAnotherDivRoot = () => {
        const div = document.createElement("div");
        div.id = "body-container";

        // Move the body's children into this wrapper
        while (document.body.firstChild) {
            div.appendChild(document.body.firstChild);
        }

        // Append the wrapper to the body
        document.body.appendChild(div);
    }

    private _originalBodyDisplay: string | null = '';
    private styleBody = () => {
        this._originalBodyDisplay = document.body.style.display;
        document.body.style.display = 'flex';
    }

    resetBodyStyle = () => {
        document.body.style.display = this._originalBodyDisplay;
    }
}