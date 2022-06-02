import React from 'react';

function StyledIconComponent(props) {
    return <div style={{ color: 'red', border: 'medium dashed green', width: '10%' }}>{props.children}</div>;
}

export default StyledIconComponent;
