import { useEffect } from 'react';
import { useUsersStore } from '../store/useUsersStore';

export function UserList() { // отображает состояние запроса и список
    const state = useUsersStore((s) => s.state); // подписка на состояние
    const fetchUsers = useUsersStore((s) => s.fetchUsers); // действие загрузки

    useEffect(() => { // загружает пользователей при первом показе
        fetchUsers();
    }, [fetchUsers]);

    if (state.status === 'idle' || state.status === 'loading') { // ожидание ответа
        return <p>Загрузка...</p>;
    }

    if (state.status === 'error') { // вывод ошибки и кнопки повтора
        return (
            <div>
                <p>Ошибка: {state.message}</p>
                <button onClick={fetchUsers}>Повторить</button>
            </div>
        );
    }

    return ( // успешный ответ: отображаем список
        <ul>
            {state.data.map((user) => (
                <li key={user.id}> {/* key помогает React различать элементы */}
                    {user.name}, {user.age} лет, {user.city}
                </li>
            ))}
        </ul>
    );
}