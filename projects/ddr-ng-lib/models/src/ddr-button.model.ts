import { DdrIconPositionButton } from "ddr-ng/types";

export interface DdrButton {
    text?: string;
    icon?: string;
    tooltipText?: string;
    disabled?: boolean
    iconPosition?: DdrIconPositionButton
}