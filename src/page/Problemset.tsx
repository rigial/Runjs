import { memo } from 'react';
import Navbar from '../components/Navbar';
import SearchProblem from '../components/SearchProblem';
import ProblemsetTable from '../components/ProblemsetTable';

function Problemset() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Navbar />
      <h1 className="my-2 text-xl">Problemset List</h1>
      <h5 className="text-gray-500 my-2">
        A better way to prepare for Javascript coding interviews.
      </h5>
      <SearchProblem />
      <ProblemsetTable />
    </section>
  );
}

export default memo(Problemset);
