import React from 'react';

const TodoList = ({ todoList, setTodoList }) => {

    const handle_delete_click = (item) => () => {
        const filtered = todoList.filter(i => String(i) !== String(item))
        setTodoList(filtered)
    }

    const calcColor = (index) => {
        // const i = String(index)
        let color = `68, 205, 239, .${index}`
        console.log(color)
        return color
    }

    return (
        <div className="w-50 bg-secondary mx-auto">
            {
                todoList?.map((item, index) =>
                    <div key={index} className='d-flex align-items-center justify-content-between my-2 px-3'
                        style={{ backgroundColor: `rgba(${calcColor(index)})` }}>
                        <span>{index + 1}</span>
                        <span>{item}</span>
                        <button onClick={handle_delete_click(item)} className="btn btn-danger">Delete</button>
                    </div>
                )
            }
        </div>
    );
};

export default TodoList;