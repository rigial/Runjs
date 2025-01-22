import { useEffect } from "react";

type Callback = () => void;

const useFormatDocument = (formatDocument: Callback) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const isCtrlOrCmd = event.ctrlKey || event.metaKey;
            const isS = event.key === "q" || event.key === "Q";

            if (isCtrlOrCmd && isS) {
                event.preventDefault();
                formatDocument();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [formatDocument]);
};

export default useFormatDocument;