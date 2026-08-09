import { DdrToastStatus } from "ddr-ng/types";

export interface DdrToast {
    title: string
    message: string
    status: DdrToastStatus
    rendered: boolean
}
