import initDB from './initDb';
import CodeDBSchema from './schema';

export const getAllCodes = async () => {
  const db = await initDB();
  return db.getAll('codes');
};

export const addCode = async (data: CodeDBSchema['codes']['value']) => {
  const db = await initDB();
  await db.add('codes', data);
};

export const updateCode = async (
  id: string,
  updatedData: Partial<CodeDBSchema['codes']['value']>
) => {
  const db = await initDB();
  const existing = await db.get('codes', id);
  if (existing) {
    await db.put('codes', { ...existing, ...updatedData });
  }
};

export const deleteCode = async (id: string) => {
  const db = await initDB();
  await db.delete('codes', id);
};

export const getCode = async (id: string) => {
  const db = await initDB();
  return db.get('codes', id);
};
