export interface ISender {
    send(address: string, message: any): void;
}
export declare class TelegramMessageSender implements ISender {
    send(address: string, message: any): void;
}
