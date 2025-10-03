export class IStorageRepository {
    store(key, data) { throw new Error("Method 'store' must be implemented"); }
    get(key) { throw new Error("Method 'get' must be implemented"); }
    remove(key) { throw new Error("Method 'remove' must be implemented"); }
    clear() { throw new Error("Method 'clear' must be implemented"); }
    has(key) { throw new Error("Method 'has' must be implemented"); }
}