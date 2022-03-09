import styled from 'styled-components';


export const InputStyle = styled.div `

padding:1.2rem;
width:20rem;
border-radius:5px;
position: relative;
overflow: hidden;
background-color: white;
border: 1px solid #ccc;
box-sizing: border-box;
color: #333;
cursor: default;
outline: none;
transition: all 200ms ease;
position:relative;

input{
    border:none;
    font-weight:600;
    font-size:16px;
    margin-left:4px;
}
textarea:focus, input:focus{
    outline: none;
}
`;