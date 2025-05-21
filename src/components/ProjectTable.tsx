import { Fragment, memo, useRef, useState } from 'react';
import { IProjectTable, ModalRef, UserCodeBase } from '../utils/interface';
import { Link } from 'react-router-dom';
import { saveJSTSFile } from '../utils/commonFunction';
import { deleteCode, updateCode } from '../db/operations';
import CreatePlayground from './CreatePlayground';

function ProjectTable({
  data,
  bin,
  createPlayground,
  dbcall,
  tagSuggestions,
}: IProjectTable) {
  const dialogRef = useRef<ModalRef>(null);
  const [renameData, setRenameData] = useState<UserCodeBase>();

  function handleDownload(val: UserCodeBase) {
    if (val.language !== 'html') {
      saveJSTSFile(val.code, val.fileName, val.language);
    }
  }

  async function handleFavorite(val: UserCodeBase) {
    const updatePayload: UserCodeBase = {
      ...val,
      star: val.star === 1 ? 0 : 1,
    };
    try {
      await updateCode(val.id, updatePayload);
      await dbcall();
    } catch (error) {
      console.log('Error', error);
    }
  }

  async function handleDelete(val: UserCodeBase) {
    const updatePayload: UserCodeBase = {
      ...val,
      isDelete: !val.isDelete,
    };
    try {
      await updateCode(val.id, updatePayload);
      await dbcall();
    } catch (error) {
      console.log('Error', error);
    }
  }

  async function handleConfirmDelete(id: string) {
    try {
      await deleteCode(id);
      await dbcall();
    } catch (error) {
      console.log('Error', error);
    }
  }

  if (data.length === 0) {
    return (
      <div className="overflow-x-auto h-96 w-full flex justify-center items-center flex-col">
        {bin ? (
          <Link to={'/dashboard'} className="text-gray-600">
            Nothing on Bin!
          </Link>
        ) : (
          <button
            onClick={createPlayground}
            className="text-gray-600 cursor-pointer hover:underline"
          >
            We found nothing on your Index DB! Create now...
          </button>
        )}
      </div>
    );
  }

  return (
    <Fragment>
      <div className="overflow-x-auto my-6 text-black">
        <table className="min-w-full divide-y-[1px] border-black text-sm border-collapse border">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                Language
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                Last modified
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium border-[2px] border-black">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y border-black">
            {data.map((val, index) => {
              return (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">
                    <img
                      src={
                        val.language === 'js'
                          ? '/JavaScript.webp'
                          : val.language === 'ts'
                            ? '/Typescript.webp'
                            : val.language === 'html'
                              ? '/HTML.webp'
                              : '/runjs.in.webp'
                      }
                      className="size-5"
                      alt="Language Logo"
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black hover:cursor-pointer hover:underline">
                    <Link
                      to={`/${val.language}/${val.id}`}
                    >{`${val.fileName}.${val.language}`}</Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 border-[2px] border-black">
                    {val?.lastModifiedAt.toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 border-[2px] border-black">
                    <div className="w-full flex gap-4 color-black">
                      {bin === false ? (
                        <Fragment>
                          <button onClick={() => handleDownload(val)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              stroke="currentColor"
                              fill="black"
                            >
                              <path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              setRenameData(val);
                              dialogRef?.current?.open();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              stroke="currentColor"
                              fill="black"
                            >
                              <path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l498-498q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24 16l51 51q11 11 16 24t5 26.54q0 14.45-5.02 27.54T795-642L297-144H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z" />
                            </svg>
                          </button>
                          <button onClick={() => handleFavorite(val)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              stroke="currentColor"
                              fill={val.star === 1 ? 'red' : 'black'}
                            >
                              <path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" />
                            </svg>{' '}
                          </button>
                          <button onClick={() => handleDelete(val)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              stroke="currentColor"
                              fill="black"
                            >
                              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                            </svg>
                          </button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <button onClick={() => handleDelete(val)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="currentColor"
                            >
                              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
                            </svg>
                          </button>
                          <button onClick={() => handleConfirmDelete(val.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              stroke="currentColor"
                              fill="black"
                            >
                              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                            </svg>
                          </button>
                        </Fragment>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CreatePlayground
        dbcall={dbcall}
        renameData={renameData}
        edit={true}
        ref={dialogRef}
        tagSuggestions={tagSuggestions}
      />
    </Fragment>
  );
}

export default memo(ProjectTable);
