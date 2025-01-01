import { User } from '@/lib/auth/auth.types.ts';
import { IDBStorageService } from '@/lib/storage/IdbStorageService.ts';

export const userStorage = new IDBStorageService<User>('user');
export const tokenStorage = new IDBStorageService<string>('access_token');
