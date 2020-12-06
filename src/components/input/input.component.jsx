import React, { useRef } from 'react';

const Input = ({ setTodoList }) => {
    const input = useRef(null);

    const handle_btn_click = () => {
        setTodoList(prevState => [...prevState, input.current.value])
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <input type="text" ref={input} />
            <button onClick={handle_btn_click} className="btn btn-info ml-2">Sub</button>
        </div>
    );
};

export default Input;

