import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'select-shorten',
    template: `
        <select [style.max-width.px]="maxWidth">
            <option *ngFor="let option of options" [value]="option.value" [innerText]="shortenOptionText(option.innerText)" [title]="option.innerText"></option>
        </select>
    `
})
export class SelectShortenComponent {
    @Input() maxWidth: number | string;
    @Input() reverseEllipsis: boolean | string;
	@Output() maxWidthChange = new EventEmitter<number>();

    options = OPTIONS;

    changeMaxWidth(width?: number) {
        this.maxWidth = width;
        this.maxWidthChange.emit(this.maxWidth);
    }

    shortenOptionText(text: string, reverseEllipsis: boolean) {
        let doReverse = (typeof reverseEllipsis === 'undefined') ? false : reverseEllipsis;
        const textLen: number = text.length;
        const maxChars: number = ( <number>this.maxWidth / 7.3 );  // get max number of characters that will fit comfortably within a pixel width
        if(textLen > maxChars) {
            const ellipsis: string = '...';
            if(doReverse) {
                text = text.substr( 0, (maxChars - ellipsis.length) ) + ellipsis;
            } else {
                text = ellipsis + text.substr( (textLen - maxChars - ellipsis.length), textLen);
            }
        }
        return text;
    }
}

const OPTIONS: Option[] = [
    { value:1, innerText:"Item with text that is too long to fit inside a select option" },
    { value:2, innerText:"Item 2" },
    { value:3, innerText:"Item 3" },
    { value:4, innerText:"Item 4" },
    { value:5, innerText:"Item 5" },
];
export class Option {
    value: number;
    innerText: string;
}
