import React from 'react';

const Title = ({ todoList }) => {
    const length = todoList.length

    const getTitle = () => {
        let titleText
        if (length === 0) {
            titleText = 'zero'
            return;
        } else if (length <= 3) {
            titleText = 'less than 3'
        } else if (length < 10) {
            titleText = 'less than 10'
        } else {
            titleText = 'too many'
        }
        return titleText;
    }

    return (
        <div>
            {getTitle()}
        </div>
    );
};

export default Title;