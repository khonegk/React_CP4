// объединение описывает все возможные состояния запроса и связанные с ними данные
export type RequestState<T> =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'error'; message: string }
    | { status: 'success'; data: T };