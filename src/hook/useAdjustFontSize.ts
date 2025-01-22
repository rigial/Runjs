import { useEffect } from "react";

type Callback = (operation: "increaseFontSize" | "decreaseFontSize") => void;

const useAdjustFontSize = (operation: Callback) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isCtrl = event.ctrlKey || event.metaKey;
            const isPlus = event.key === "+" || event.key === "=";
            const isMinus = event.key === "-";

            if (isCtrl && isPlus) {
                event.preventDefault();
                operation("increaseFontSize");
            }

            if (isCtrl && isMinus) {
                event.preventDefault();
                operation("decreaseFontSize");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [operation]);
};

export default useAdjustFontSize;
