import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { addCashAction, getCashAction } from './store/reducers/cashReducer';
import { fetchUsersAction, removeUserAction } from './store/reducers/usersReducer';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const users = useSelector((state) => state.users.users);

  const addCash = () => {
    dispatch(addCashAction())
  }

  const getCash = () => {
    dispatch(getCashAction())
  }

  const addUser = () => {
    dispatch(fetchUsersAction());

  } 

  const removeUser = (user) => dispatch(removeUserAction(user.id));

  return (
    <>
      <div className='cash'>{cash}</div>
      <div className="inner">
        <button onClick={() => addCash()}>Добавить деньги</button>
        <button onClick={() => getCash()}>Снять деньги</button>
      </div>
      <div className="inner">
        <button style={{width: '100%'}} onClick={() => addUser()}>Добавить пользователя</button>
      </div>
    {users.length ? users.map((it) => <div onClick={() => removeUser(it)} className='user' key={it.name}>{it?.name}</div>) : <div>Нету пользователей</div>}
    </>
  )
}

export default App
