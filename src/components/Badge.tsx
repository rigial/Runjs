import { memo } from "react";
import { TaggedResult } from "../utils/interface";

function Badge({ count, tag, setSearchTerm, searchTerm }: TaggedResult) {
    return (
        <button onClick={() => setSearchTerm((prev) => prev === tag ? "" : tag)} className={`whitespace-nowrap rounded-full border-[2px] border-black px-2.5 py-0.5 text-sm ${tag === searchTerm ? "text-white bg-black" : "text-black bg-white"} hover:bg-black hover:text-white`}>
            {`${tag} ${count}`}
        </button>
    );
}

export default memo(Badge);
