import EventHandler from "./eventHandler";


export default abstract class AbstractShareButton {

    eventHandler: EventHandler;
    clazz: string;
    url: string;

    constructor(clazz: string, url: string) {
        this.clazz = clazz;
        this.eventHandler = new EventHandler();
        this.url = url;
    }

    abstract createLink(): string;

    bind() {

        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.clazz, 'click', () => window.open(link));
    }
}