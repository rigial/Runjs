import { memo } from 'react';
import { IAppLoading } from '../utils/interface';

function AppLoading({ freeLoading }: IAppLoading) {
  return (
    <main className={`${freeLoading ? 'h-full' : 'h-screen'} w-full`}>
      <div className="grid h-screen place-content-center px-4">
        <h1
          className={`uppercase tracking-widest ${freeLoading ? 'text-white' : 'text-black'} `}
        >
          RunJs | Loading..
        </h1>
      </div>
    </main>
  );
}

export default memo(AppLoading);
