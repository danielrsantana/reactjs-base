/**
 * DataItem Model that connect data between application and components  
 * @constructor
 * @param {string} value - item value 
 * @param {string} text - text of the item
 * @param {string} name - Name of the item (to be used when grouping radiobuttons for example)
 * @param {boolean} isSelected - Boolean representing if the item is selected or not
 * @param {boolean} isDisabled - Boolean representing if the item is disabled or not
 */
export interface DataItemModel {
    value: string;
    text: string;
    name?: string;
    isSelected: boolean;
    isDisabled?:boolean;
}