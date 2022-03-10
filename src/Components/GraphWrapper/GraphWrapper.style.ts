import styled from 'styled-components';


export const WrapperStyle = styled.div `
.graph-header{
    display:flex;
    justify-content:space-evenly;
    margin-top:-3rem;
    margin-bottom:4rem;

    @media (max-width: 376px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
}


.graph-wrapper{
    display:flex;
    justify-content:center;
    margin-left:0px;
    margin-top:2rem;
}

`;