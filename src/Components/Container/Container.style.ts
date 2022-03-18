import styled from 'styled-components';


export const ContainerStyle = styled.div `

    display: grid;
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) auto minmax(100px, 1fr);
    align-items:center;
    height:auto;
    width:90rem;
    margin: 0 auto;
    border-radius:10px;
    justify-items:center;
    background-color:#bda7c3;
    font-weight:600;
    box-shadow: 5px 5px 15px 1px rgb(102 89 115);

    @media (max-width: 376px) {
      width:90vw;
      height:auto;
      display:flex;
      flex-direction:column;
      }
  
  
    
    .error-div{
        position:absolute;
        color:rgb(179, 0, 33);
        font-size:12px;
        font-style:normal;
        font-weight:normal;
    }
`;