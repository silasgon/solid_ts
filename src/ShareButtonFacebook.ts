import AbstractShareButton from "./AbstractSharebutton";

export default class ShareButtonFacebook extends AbstractShareButton {

    constructor(clazz: string, url: string) {
        super(clazz, url);

    }
    createLink(): string {
        return `https://www.facebook.com/sharer.php?u=${this.url}`;
    }
}