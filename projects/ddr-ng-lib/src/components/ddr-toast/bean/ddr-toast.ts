import { DdrToastStatus } from "../../../types/types";

export interface DdrToast {
    title: string
    message: string
    status: DdrToastStatus
    rendered: boolean
}
