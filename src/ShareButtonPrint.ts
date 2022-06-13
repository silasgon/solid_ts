import AbstractShareButton from "./AbstractSharebutton";
import EventHandler from "./EventHandler";



export default class ShareButtonPrint extends AbstractShareButton{

    constructor(eventHandler: EventHandler, clazz: string) {
        super(eventHandler, clazz);
    }
    
    createAction(){
        return () => window.print();
    }
}