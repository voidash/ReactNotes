# Redux

- State management library on Javascript
- Generally used with React 
- Can be used without React

## Components of Redux 
- Store
	- `createStore` takes in reducer, state , and middlewares etc....
	- Reducer + state : "Reducer actually changes the state. Nothing else can change the state except reducer. "
	- State: "initial state should be provided to Reducer"
	
- Dispatcher
	- Event handler `dispatches` the message to store where Reducer can identify the type of action and change state accordingly.
	- `useDispatch`
- UI
	- UI contains Items related to Store
	- `useSelector`
![1fb2949a8b7d9057cfb4b487b59a682f.png](https://i.imgur.com/E0vvYJz.png)

### With Redux Thunk 

-`redux, react-redux, redux-thunk`
	-