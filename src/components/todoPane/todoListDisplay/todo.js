import { React } from 'react';
import RemoveButton from './removeButton';
import TodoCheckBox from './todoCheckBox';

const Todo = (context) => {
	const { actions, data } = context;
	const { id, todo } = data;

	return (
		<div key={ id } className="todo">
			<span>{TodoCheckBox(context)}</span>
			<span
				role="setEditing"
				onClick={ () => actions.setEditing(data) }
			>{todo}</span>
			<span role="removeTodo">{RemoveButton(context)}</span>
		</div>
	);
};

export default Todo;