import { openDB } from "idb";
import CodeDBSchema from "./schema";

export default async function initDB() {
    return openDB<CodeDBSchema>('CodeDB', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('codes')) {
                db.createObjectStore('codes', { keyPath: 'id' });
            }
        },
    });
}