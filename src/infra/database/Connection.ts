export default interface Connection {
    open(): Promise<void>;
    close(): Promise<void>;
}
