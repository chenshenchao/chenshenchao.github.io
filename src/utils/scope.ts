export function run<T, R>(self: T | null | undefined, action: (it: T) => R): R | null {
    if (self) {
        return action(self);
    } else {
        return null;
    }
}

export function apply<T>(self: T | null, action: (this: T) => void): T | null {
    if (self) {
        action.call(self);
    }
    return self;
}