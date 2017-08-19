"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/*
 * Shorten select option text if it is too long for the select element, preventing default browser behaviour of letting select element grow wider than it should
 * Use in combination with maxChars argument. This sets the intended max width of the element which the pipe will use to format select option text to fit within that max width by shortening if too long and prepending ellipsis, '...'.
 * Takes a "reverseEllipsis" argument that defaults to false. Setting to true will append ellipsis to end of text instead of its default to prepend to the start
 * A "maxChars" argument is mandatory. Pass in a max width integer value that will evaluate to max characters.
 * Usage:
 *   value | shortenText:maxChars:reverseEllipsis
 * Example:
 *   {{ "Shorten this select option text if too long" | shortenText:15 }}
 * - this may format to: "...option text if too long"
 * - the character that it truncates at before the ellipsis are added
 * Example 2:
 *   {{ "Shorten this select option text if too long" | shortenText:15:true }}
 * - this may format to: "Shorten this select option..."  (the ellipsis were swapped because reverseEllipsis argument was set to true)
 * - the character that it truncates at is where the text + ellipsis can comfortably fit within the select option max width of 15 characters wide.
*/
// TODO: Determine if pipe can read css style: max-width. It doesn't seem like the right way to think about Angular development. Expecting that maxChars can only come from a mandatory pipe argument.
var SelectShortenPipe = (function () {
    function SelectShortenPipe() {
    }
    SelectShortenPipe.prototype.transform = function (text, maxChars, reverseEllipsis) {
        var doReverse = (typeof reverseEllipsis === 'undefined') ? false : reverseEllipsis;
        var textLen = text.length;
        if (textLen > maxChars) {
            var ellipsis = '...';
            if (doReverse) {
                text = text.substr(0, (maxChars - ellipsis.length)) + ellipsis;
            }
            else {
                text = ellipsis + text.substr((textLen - maxChars - ellipsis.length), textLen);
            }
        }
        return text;
    };
    return SelectShortenPipe;
}());
SelectShortenPipe = __decorate([
    core_1.Pipe({ name: 'shortenText' })
], SelectShortenPipe);
exports.SelectShortenPipe = SelectShortenPipe;
//# sourceMappingURL=select-shorten.pipe.js.map