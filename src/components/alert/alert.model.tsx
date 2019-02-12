/**
 * AlertComponent Model representation
 * @constructor
 * @param {string} text - Text of the message to be displayed
 * @param {string} type - Type of the message to be displayed (Success, Error, Info, Warning)
 * @param {string} position - Position (top or bottom) where the message will be displayed
 * @param {string} side - Side (left or right) where the message will be displayed
 * @param {string} id - Id of the message to be used when removing from screen
 * @param {string} interval - (optional) Duration of time until message expires
 */
export interface AlertModel {
    text: string;
    type: string;
    position: string;
    side: string;
    id: string;
    interval?: number;
}