import React from 'react'

const NExtArrow = (props) => {
    const { className, style, onClick } = props;
    return (

            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            >rafi</div>

    )
}

export default NExtArrow
