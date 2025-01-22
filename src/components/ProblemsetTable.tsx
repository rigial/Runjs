import { memo } from "react"

function ProblemsetTable() {
    return (
        <div className="overflow-x-auto my-6 text-black">
            <table className="min-w-full divide-y-[1px] border-black text-sm border-collapse border">
                <thead className="text-left">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                            Status
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                            Star
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                            Problem
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                            Difficulty
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y border-black">

                </tbody>
            </table>
        </div>
    )
}

export default memo(ProblemsetTable)