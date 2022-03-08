import styled from 'styled-components';


export const ContainerStyle = styled.div `

    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) auto minmax(100px, 1fr);
    align-items:center;
    height:auto;
    width:90rem;
    margin: 0 auto;
    border: 1px solid purple;
    border-radius:10px;
    justify-items:center;
    background-color:#bda7c3;
    font-weight:600;
    
    .left input{
        font-size:1.15rem;
        font-weight:600;
    }
`;