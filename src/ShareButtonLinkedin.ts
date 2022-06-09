import AbstractShareButton from "./AbstractSharebutton";

export default class ShareButtonLinkedin extends AbstractShareButton {

    constructor(clazz: string, url: string) {
        super(clazz, url);

    }
    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}