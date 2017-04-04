import { Pipe, PipeTransform } from '@angular/core';
/*
 * Shorten select option text if it is too long for the select element, preventing default browser behaviour of letting select element grow wider than it should
 * Use in combination with maxChars argument. This sets the intended max width of the element which the pipe will use to format select option text to fit within that max width by shortening if too long and prepending ellipsis, '...'.
 * Takes a "reverseEllipsis" argument that defaults to false. Setting to true will append ellipsis to end of text instead of its default to prepend to the start
 * A "maxChars" argument is mandatory. Pass in a max width integer value that will evaluate to max characters.
 * Usage:
 *   value | shortenSelect:maxChars:reverseEllipsis 
 * Example:
 *   {{ "Shorten this select option text if too long" | shortenSelect:15 }}
 * - this may format to: "...option text if too long"
 * - the character that it truncates at before the ellipsis are added
 * Example 2:
 *   {{ "Shorten this select option text if too long" | shortenSelect:15:true }}
 * - this may format to: "Shorten this select option..."  (the ellipsis were swapped because reverseEllipsis argument was set to true)
 * - the character that it truncates at is where the text + ellipsis can comfortably fit within the select option max width of 15 characters wide.
*/

// TODO: Determine if pipe can read css style: max-width. It doesn't seem like the right way to think about Angular development. Expecting that maxChars can only come from a mandatory pipe argument.

@Pipe({name: 'shortenSelect'})
export class SelectShortenPipe implements PipeTransform {
    transform(text: string, maxChars: number, reverseEllipsis: boolean): string {
        let doReverse = (typeof reverseEllipsis === 'undefined') ? false : reverseEllipsis;
        const textLen: number = text.length;
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
