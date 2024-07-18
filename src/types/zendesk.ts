declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Window {
        zE: (ref: string, command: string) => void;
    }
}

export {};
