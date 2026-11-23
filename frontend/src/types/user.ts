// форма одного пользователя, которую ожидает приложение от сервера
export interface User {
    id: number;
    name: string;
    age: number;
    city: string;
}