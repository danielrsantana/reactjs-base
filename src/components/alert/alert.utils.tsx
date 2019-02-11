import { AlertModel } from "./alert.model";
import * as shortid from 'shortid';

export function generateMessage(
    text: string,
    position: string = "top",
    side: string = "right",
    type: string = "success",
    interval?: number): AlertModel {

    return {
        id: shortid.generate(),
        interval: interval,
        text: text,
        position: position,
        side: side,
        type: type
    };
}

export function getNotificationTypes() {
    return [
        { value: 'success', text: "Success", isActive: true },
        { value: 'info', text: "Info", isActive: false },
        { value: 'warning', text: "Warning", isActive: false },
        { value: 'error', text: "Error", isActive: false }
    ];
};

export function getNotificationSide() {
    return [
        { value: 'right', text: "Right", name: "notificationSide", isChecked: true },
        { value: 'left', text: "Left", name: "notificationSide", isChecked: false },
    ];
};

export function getNotificationPositions() {
    return [
        { value: 'top', text: "Top", name: "notificationPosition", isChecked: true },
        { value: 'bottom', text: "Bottom", name: "notificationPosition", isChecked: false },
    ];
};

export function getNotificationTimedOptions() {
    return [
        { value: "yes", text: "Yes", name: "notificationTimedOption", isChecked: true },
        { value: "no", text: "No", name: "notificationTimedOption", isChecked: false },
    ];
};