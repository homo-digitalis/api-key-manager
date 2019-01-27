export interface ISender {
    send(address: string, message: any): void
}

export class TelegramMessageSender implements ISender {

    // tslint:disable-next-line:prefer-function-over-method
    public send(address: string, message: any): void {
        // work in progress
    }

}
