export interface DdrMessage {
    id?: number;
    text: string;
    robot: boolean;
    icon?: string;
    date?: Date
    load: boolean
    data?: any;
}