import { IStorageRepository } from '../domains/shared/IStorageRepository.js';

export class LocalStorageRepository extends IStorageRepository {
    store(key, data) {
        if (typeof data === 'object') {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            localStorage.setItem(key, data);
        }
    }

    get(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;

        try {
            return JSON.parse(item);
        } catch {
            return item;
        }
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }

    has(key) {
        return localStorage.getItem(key) !== null;
    }
}