import SearchInput from '../components/SearchInput';
import Badge from '../components/Badge';
import { useEffect, useRef, useState } from 'react';
import { ModalRef, Tag, UserCodeBase } from '../utils/interface';
import { getAllCodes } from '../db/operations';
import ProjectTable from '../components/ProjectTable';
import CreatePlayground from '../components/CreatePlayground';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [userSavedCode, setUserSavedCode] = useState<UserCodeBase[]>([]);
  const [filterData, setFilterData] = useState<UserCodeBase[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFavouriteSelected, setIsFavouriteSelected] = useState(false);
  const [tag, setTags] = useState<Tag>({});
  const dialogRef = useRef<ModalRef>(null);

  async function dbcall() {
    try {
      const dbResult = await getAllCodes();
      const filterIsnotDeleted = dbResult.filter(
        (val) => val.isDelete === false
      );
      const tagHashMap: Tag = {};
      filterIsnotDeleted.forEach(
        (val) => (tagHashMap[val.tag] = (tagHashMap[val.tag] ?? 0) + 1)
      );
      setUserSavedCode(filterIsnotDeleted);
      setFilterData(filterIsnotDeleted);
      setTags(tagHashMap);
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    async function fetchUserSavedCode() {
      await dbcall();
    }
    fetchUserSavedCode();
  }, []);

  function filterFavouriteCode() {
    if (isFavouriteSelected) {
      const filter = userSavedCode.filter((val) => val.star === 1);
      return setFilterData(filter);
    } else {
      return setFilterData(userSavedCode);
    }
  }

  function filterList() {
    setIsFavouriteSelected(false);
    if (searchTerm === '') {
      return setFilterData(userSavedCode);
    }
    const filter = userSavedCode.filter(
      (val) =>
        val.fileName.toLowerCase().includes(searchTerm) ||
        val.tag.toLowerCase().includes(searchTerm)
    );
    return setFilterData(filter);
  }

  useEffect(() => {
    filterList();
  }, [searchTerm]);

  useEffect(() => {
    filterFavouriteCode();
  }, [isFavouriteSelected]);

  function onInputChange(text: string) {
    setSearchTerm(text);
  }

  return (
    <section className="min-h-screen w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <h1 className="my-2 text-xl">Create playgrounds</h1>
        <h5 className="text-gray-500 my-2">
          Coding playgrounds on RunJs are powered by VS Code IDE and start
          within a few seconds. Practice coding while learning for free.
        </h5>
        <SearchInput
          showFavourite={filterData.length === 0}
          isFavouriteSelected={isFavouriteSelected}
          setIsFavouriteSelected={setIsFavouriteSelected}
          searchTerm={searchTerm}
          dialogRef={dialogRef}
          onInputChange={onInputChange}
        />
        {Object.keys(tag).length > 0 ? (
          <section className="flex flex-wrap gap-2 mt-3">
            <h1>Your Tags : </h1>
            {Object.keys(tag).map((val, index) => (
              <Badge
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                key={index}
                tag={val}
                count={tag[val]}
              />
            ))}
          </section>
        ) : null}
        <ProjectTable
          tagSuggestions={Object.keys(tag)}
          dbcall={dbcall}
          data={filterData}
          bin={false}
          createPlayground={() => dialogRef?.current?.open()}
        />
      </div>
      <CreatePlayground
        edit={false}
        ref={dialogRef}
        tagSuggestions={Object.keys(tag)}
      />
    </section>
  );
}

export default Dashboard;
