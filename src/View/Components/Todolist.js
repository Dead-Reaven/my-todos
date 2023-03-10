import Todo from './Todo';

const Todolist = ({ todos }) => {
	// if list is empty output massage
	if (!todos.length) return <div className='empty-list' data-testid='empty list'></div>;

	return (
		<div data-testid='todo list' className='container__todos'>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			))}
		</div>
	);
};

export default Todolist;
