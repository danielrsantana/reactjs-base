import { AlertModel } from "./alert.model";
import shortid from "shortid";
import { DataItemModel } from "../common/dataItem.model";
import * as common from "../common/constants.common";

/**
 * Generate the message object according to the given parameters
 * @class
 * @param {string} text - Text of the message to be displayed
 * @param {string} type - Type of the message to be displayed (Success, Error, Info, Warning)
 * @param {string} position - Position (top or bottom) where the message will be displayed
 * @param {string} side - Side (left or right) where the message will be displayed
 * @param {string} id - Id of the message to be used when removing from screen
 * @param {string} interval - (optional) Duration of time until message expires
 */
export function generateMessage(
  text: string,
  position: string = common.default.TOP,
  side: string = common.default.RIGHT,
  type: string = common.default.SUCCESS,
  interval?: number
): AlertModel {
  return {
    id: shortid.generate(),
    interval: interval,
    text: text,
    position: position,
    side: side,
    type: type
  };
}

/**
 * Return a list of DataItemModel containning possible notification types
 * * @method {Array<DataItemModel>} getNotificationTypes
 */
export function getNotificationTypes(): Array<DataItemModel> {
  return [
    {
      value: common.default.SUCCESS,
      text: capitalizeFirstLetter(common.default.SUCCESS),
      isSelected: true
    },
    {
      value: common.default.INFO,
      text: capitalizeFirstLetter(common.default.INFO),
      isSelected: false
    },
    {
      value: common.default.WARNING,
      text: capitalizeFirstLetter(common.default.WARNING),
      isSelected: false
    },
    {
      value: common.default.ERROR,
      text: capitalizeFirstLetter(common.default.ERROR),
      isSelected: false
    }
  ];
}

/**
 * Return a list of DataItemModel containning possible notification sides
 * * @method {Array<DataItemModel>} getNotificationTypes
 */
export function getNotificationSide(): Array<DataItemModel> {
  return [
    {
      value: common.default.RIGHT,
      text: capitalizeFirstLetter(common.default.RIGHT),
      name: "notificationSide",
      isSelected: true
    },
    {
      value: common.default.LEFT,
      text: capitalizeFirstLetter(common.default.LEFT),
      name: "notificationSide",
      isSelected: false
    }
  ];
}

/**
 * Return a list of DataItemModel containning possible notification positions
 * * @method {Array<DataItemModel>} getNotificationTypes
 */
export function getNotificationPositions(): Array<DataItemModel> {
  return [
    {
      value: common.default.TOP,
      text: capitalizeFirstLetter(common.default.TOP),
      name: "notificationPosition",
      isSelected: true
    },
    {
      value: common.default.BOTTOM,
      text: capitalizeFirstLetter(common.default.BOTTOM),
      name: "notificationPosition",
      isSelected: false
    }
  ];
}

/**
 * Return a list of DataItemModel containning possible notification options
 * * @method {Array<DataItemModel>} getNotificationTypes
 */
export function getNotificationTimedOptions(): Array<DataItemModel> {
  return [
    {
      value: common.default.YES,
      text: capitalizeFirstLetter(common.default.YES),
      name: "notificationTimedOption",
      isSelected: true
    },
    {
      value: common.default.NO,
      text: capitalizeFirstLetter(common.default.NO),
      name: "notificationTimedOption",
      isSelected: false
    }
  ];
}

/**
 * Return the informed text with it's first letter capitized
 * * @method {string>} capitalizeFirstLetter
 */
function capitalizeFirstLetter(text: string): string {
  return text != null ? text.replace(/\w/, c => c.toUpperCase()) : text;
}
