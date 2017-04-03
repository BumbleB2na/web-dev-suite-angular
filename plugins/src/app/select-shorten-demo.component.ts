import { Component } from "@angular/core";

@Component({
    selector: 'select-shorten-demo',
    template: `
        <article>
            <header>
                <h1>Angular Pipe - Shorten Select Element</h1>
            </header>
            <p>
                Select option text can expand beyond css max-width settings. Using custom angular pipe, 'shortenText' the select option text can be restricted to a maximum number of characters. If text is shortened, it is truncated and ellipsis, '...' will be prepended to the beginning.
            </p>
            <p>
                <i>Check it out: </i>
                <select style="max-width:350px;">
                    <option value="0" disabled>Please select an item</option>
                    <option title="Short item text" value="1">{{ "Short item text" | shortenSelect:20 }}</option>
                    <option title="Long item text that is too long to fit inside a select option" value="2">{{ "Long item text that is too long to fit inside a select option" | shortenSelect:20 }}</option>
                    <option title="Short item text" value="3">{{ "Short item text" | shortenSelect:20 }}</option>
                </select>
            </p>
            <p>
                <b>Note:</b> Hovering your mouse over any shortened option text will reveal the complete option text in a tooltip (on browsers that support the 'title' attribute).
            </p>
        </article>
    `,
    //templateUrl: './select-shorten-demo.component.html' - For some reason templateUrl is failing in Karma tests even with beforeEach(async()) so, using inline templates until I can resolve it
})
export class SelectShortenDemoComponent { }