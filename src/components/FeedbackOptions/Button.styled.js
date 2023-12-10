import styled from "styled-components"

export const Button = styled.button(() => {
    return {
        cursor: 'pointer',
        padding: '4px 10px',
        margin: '0 10px',
        backgroundColor: '#bcd6e3',
        border: 'none',
        borderRadius: '4px',
        transitionDuration: '0.3s',
        '&:hover': {
            backgroundColor: '#64b1c3',
            scale: '1.1',
        }
    }
})