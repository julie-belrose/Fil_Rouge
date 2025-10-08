import { IStorageRepository } from '#domains-frontend/shared/iStorageRepository.js';
import { TokenMonitorService } from '../shared/services/tokenMonitorService.js';

export class LocalStorageRepository extends IStorageRepository {
    store(key, data) {
        if (typeof data === 'object') {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            localStorage.setItem(key, data);
        }

        // Démarrer le monitoring quand un token est stocké
        if (key === 'auth_token') {
            const tokenMonitor = TokenMonitorService.getInstance();
            tokenMonitor.startMonitoring();
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

        // Arrêter le monitoring quand le token est supprimé
        if (key === 'auth_token') {
            const tokenMonitor = TokenMonitorService.getInstance();
            tokenMonitor.stopMonitoring();
        }
    }

    clear() {
        localStorage.clear();
    }

    has(key) {
        return localStorage.getItem(key) !== null;
    }
}