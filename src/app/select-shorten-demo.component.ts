import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'select-shorten-demo',
    templateUrl: './select-shorten-demo.component.html'
})
export class SelectShortenDemoComponent {
    @Input() maxWidth: number | string;
    @Input() maxWidthPerc: number | string;
	@Output() maxWidthChange = new EventEmitter<number>();
	@Output() maxWidthChangePerc = new EventEmitter<number>();

    changeMaxWidth(width?: number) {
        this.maxWidth = width;
        this.maxWidthChange.emit(this.maxWidth);
    }
    changeMaxWidthPerc(width?: number) {
        this.maxWidthPerc = width;
        this.maxWidthChangePerc.emit(this.maxWidthPerc);
    }
}