import ProjectTable from '../components/ProjectTable';
import { useEffect, useState } from 'react';
import { UserCodeBase } from '../utils/interface';
import { getAllCodes } from '../db/operations';
import Navbar from '../components/Navbar';

function Bin() {
  const [userSavedCode, setUserSavedCode] = useState<UserCodeBase[]>([]);

  async function dbcall() {
    try {
      const dbResult = await getAllCodes();
      const filterIsnotDeleted = dbResult.filter(
        (val) => val.isDelete === true
      );
      setUserSavedCode(filterIsnotDeleted);
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

  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <h1 className="my-2 text-xl">Recently Deleted</h1>
      <h5 className="text-gray-500 my-2">
        Items in this bin will be permanently deleted once you choose to delete
        them forever!
      </h5>
      <ProjectTable
        tagSuggestions={[]}
        dbcall={dbcall}
        data={userSavedCode}
        bin={true}
      />
    </section>
  );
}

export default Bin;
