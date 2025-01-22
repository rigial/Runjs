import { initialize } from "esbuild-wasm";

export function saveJSTSFile(
    javascriptCode: string,
    fileName: string,
    lang: "js" | "ts",
) {
    const file = `${fileName}.${lang}`;
    const fileContent = javascriptCode;
    const blob = new Blob([fileContent], { type: "text/javascript" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = file;
    link.click();
    URL.revokeObjectURL(link.href);
};

export async function loadTypscript() {
    try {
        await initialize({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.24.2/esbuild.wasm'
        });
    } catch (error) {
        console.log("Error", error)
    }
}