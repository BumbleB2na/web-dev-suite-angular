import { Component } from "@angular/core";

@Component({
    selector: 'select-shorten-demo',
    template: `
        <article>
            <header>
                <h1>CSS Problem</h1>
            </header>
            <p>
                CSS problem: Select &lt;option&gt; text can expand beyond css max-width settings. This causes a &lt;select&gt; input element to become longer than we want. Select elements are not responsive so this behaviour can break user interfaces.
            </p>
            <p>
                See this example where the "260 pixels wide" block shows what the width of the &lt;selection&gt; element should reach at maximum:
            </p>
            <div style="max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;">
                <p>
                    260 pixel wide container
                </p>
                <p>
                    <select style="max-width:350px;">
                        <option value="0" disabled>Please select an item</option>
                        <option title="Short item text" value="1">Short item text</option>
                        <option title="Long item text that is too long to fit inside a select option" value="2">Long item text that is too long to fit inside a select option</option>
                        <option title="Short item text" value="3">Short item text</option>
                    </select>
                </p>
            </div>
            <p>
                Pure Javascript solution: We could use javascript or jquery to check if the length of string goes beyond number of characters then, truncate. It helps to show where text was truncated by prepending or appending ellipsis (...).
            </p>
        </article>
        <article>
            <header>
                <h1>Angular Pipe Solution: Shorten Option Text</h1>
            </header>
            <p>
                Shorten any string using custom angular pipe, 'shortenText' to restrict it to a maximum number of characters. If text is shortened, it is truncated and an ellipsis, '...' will be prepended to the beginning.
            </p>
            <div style="max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;">
                <p>
                    <i>Try it out: </i>
                </p>
                <p>
                    <select style="max-width:350px;">
                        <option value="0" disabled>Please select an item</option>
                        <option title="Short item text" value="1">{{ "Short item text" | shortenText:35 }}</option>
                        <option title="Long item text that is too long to fit inside a select option" value="2">{{ "Long item text that is too long to fit inside a select option" | shortenText:35 }}</option>
                        <option title="Short item text" value="3">{{ "Short item text" | shortenText:35 }}</option>
                    </select>
                </p>
            </div>
            <p>
                <b>Note:</b> Hovering your mouse over any shortened option text will reveal the complete option text in a tooltip (on browsers that support the 'title' attribute).
            </p>
        </article>

        <article>
            <header>
                <h1>Angular Component Solution: Shorten Select Element</h1>
            </header>
            <p>
                Use custom angular component, ShortenTextComponent. The select options' text can be restricted to a max width. If text is shortened, it is truncated and ellipsis, '...' will be prepended to the beginning.
            </p>
            <div style="max-width:260px;border:10px solid #ccc;background-colour:#ccc;padding:0 10px;">
                <p>
                    <i>Try it out: </i>
                </p>
                <p>
                    <select-shorten [(maxWidth)]="maxWidthPx"></select-shorten>
                    <span *ngIf="maxWidthPx" [style.max-width.px]="maxWidthPx"><br /><br />max-width at: {{maxWidthPx}}px</span>
                </p>
            </div>
            <p>
                <b>Note:</b> Hovering your mouse over any shortened option text will reveal the complete option text in a tooltip (on browsers that support the 'title' attribute).
            </p>
        </article>
    `,
    //templateUrl: './select-shorten-demo.component.html' - For some reason templateUrl is failing in Karma tests even with beforeEach(async()) so, using inline templates until I can resolve it
})
export class SelectShortenDemoComponent { }