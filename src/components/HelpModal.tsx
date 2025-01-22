import { forwardRef, useImperativeHandle, useRef } from 'react'
import { ModalRef } from '../utils/interface';

const HelpModal = forwardRef<ModalRef, unknown>((_, ref) => {

    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open: () => dialogRef.current?.showModal(),
        close: () => dialogRef.current?.close(),
    }));

    return (<dialog
        ref={dialogRef}
        className="rounded-lg w-96 p-6 shadow-lg bg-white border border-gray-300 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => {
            if (e.target === dialogRef.current) {
                dialogRef.current?.close();
            }
        }}>
        <h2 className="text-lg font-semibold text-gray-800">Need help with ShortCuts?</h2>
        <div className="overflow-x-auto my-5 text-black no-select">
            <table className="min-w-full divide-y-[1px] border-black text-sm border-collapse border">
                <thead>
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">Shortcut</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">Usage</th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">ctrl + +</td>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">Zoom in</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">ctrl + -</td>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">Zoom our</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">ctrl + s</td>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">Download File</td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">ctrl + r</td>
                        <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">Run Code</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </dialog>)
})

export default HelpModal 