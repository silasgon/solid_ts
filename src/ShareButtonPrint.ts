import AbstractShareButton from "./AbstractSharebutton";



export default class ShareButtonPrint extends AbstractShareButton{

    constructor(clazz: string, url: string) {
        super(clazz, url);

    }
    createLink(): string {
        throw new Error("Unsupported Method Exception")
    }
}