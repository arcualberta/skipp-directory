import { defineStore } from 'pinia';

export const useApiRootsStore = defineStore('useApiRootsStore', {
    state: () => ({
        _authRoot: null as string | null,
        _solrRoot: null as string | null,
        _solrCore: null as string | null
    }),
    getters: {
        authRoot(): string {
            return this._authRoot!;
        },
        solrRoot(): string {
            return this._solrRoot!;
        },
        solrCore(): string {
            return this._solrCore!;
        }
    }
});