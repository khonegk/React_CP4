import { UserList } from './components/UserList';

// главный компонент страницы собирает заголовок и список пользователей
function App() {
  return (
    <div>
      <h1>Пользователи</h1>
      <UserList />
    </div>
  );
}

export default App;
