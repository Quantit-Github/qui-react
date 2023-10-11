import { TypographyValueInterface } from "./typography.type";

export class TypographyValue implements TypographyValueInterface {
    constructor(
        public fontSize: string,
        public lineHeight: string,
    ) { }

    get css(): string {
        return `font-size:${this.fontSize};line-height:${this.lineHeight};`;
    }

    get bold(): string {
        return `${this.css}font-weight:700;`;
    }

    get underline(): string {
        return `${this.css}text-decoration:underline;`;
    }

    get boldUnderlined(): string {
        return `${this.bold}text-decoration:underline;`;
    }
}
