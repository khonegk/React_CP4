import { create } from 'zustand';
import axios from 'axios';
import { apiClient } from '../api/client';
import type { User } from '../types/user';
import type { RequestState } from '../types/request';

interface UsersStore {
    state: RequestState<User[]>; // данные и текущий статус запроса
    fetchUsers: () => Promise<void>; // действие загрузки пользователей
}

export const useUsersStore = create<UsersStore>((set) => ({ // создаёт хранилище
    state: { status: 'idle' }, // запрос ещё не запускался

    fetchUsers: async () => { // загружает пользователей
        set({ state: { status: 'loading' } });

        try {
            const response = await apiClient.get<User[]>('/users'); // типизирует ответ сервера
            set({ state: { status: 'success', data: response.data } });
        } catch (error) {
            const message = axios.isAxiosError(error) ? error.message : 'Неизвестная ошибка';
            set({ state: { status: 'error', message } });
        }
    },
}));
