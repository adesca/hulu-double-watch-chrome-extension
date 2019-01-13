import {Chat} from "./chat";

export class Sidebar {
    chat: Chat | undefined;
    isChatInView = false;

    updateView = () => {
        if (!this.isChatInView) {
            this.showSidebar();
        } else {
            this.hideSidebar();
        }

        this.isChatInView = !this.isChatInView;
    };

    showSidebar = () => {
        this.moveBodyToAnotherDivRoot();
        this.shrinkBodyVideoContainersForSidebar();
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
        // this.sideBarContainer.style.width = '25%';
        this.sideBarContainer.id = 'sidebarContainer';
        this.sideBarContainer.style.zIndex = '3001';
        

        const sidebarEl = document.createElement('div');
        sidebarEl.id = 'sidebar';
        sidebarEl.textContent = 'some sidebar content';
        this.chat = new Chat(sidebarEl);

        this.sideBarContainer.appendChild(sidebarEl);
        document.body.appendChild(this.sideBarContainer);
    };

    private moveBodyToAnotherDivRoot = () => {
        const div = document.createElement("div");
        div.id = "body-container";
        div.style.width = '75%';

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

    private shrinkBodyVideoContainersForSidebar() {
        const containerEl = document.querySelector('.Player__container');
        if (containerEl) {
            (containerEl as HTMLElement).style.width = '70%';
        } else {
            console.error("Could not find player container");
        }
    }
}