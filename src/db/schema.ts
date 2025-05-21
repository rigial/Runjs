import { DBSchema } from 'idb';
import { UserCodeBase } from '../utils/interface';

export default interface CodeDBSchema extends DBSchema {
  codes: {
    key: string; // id
    value: UserCodeBase;
  };
}
