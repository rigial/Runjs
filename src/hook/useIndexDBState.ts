import { useState, useEffect } from "react";
import { UserCodeBase } from "../utils/interface";
import { updateCode } from "../db/operations";

function useIndexDBState(
    key: string | undefined,
    delay: number = 1000
): [UserCodeBase | undefined, setState: React.Dispatch<React.SetStateAction<UserCodeBase | undefined>>] {
    const [state, setState] = useState<UserCodeBase>();

    useEffect(() => {
        if (!key) return;

        const handler = setTimeout(async () => {
            try {
                if (state && key) {
                    await updateCode(key, state);
                }
            } catch (error) {
                console.error("Error updating IndexedDB", error);
            }
        }, delay);

        return () => clearTimeout(handler);
    }, [key, state, delay]);

    return [state, setState];
}

export default useIndexDBState;
