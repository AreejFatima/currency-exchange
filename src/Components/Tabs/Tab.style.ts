import styled from 'styled-components';


export const TabStyle = styled.div `
.tabs {
    font-family: arial;
    margin: 0 auto;
    width: 100%;
    height:100%;
    text-align: center;
  }
  
  .tab-buttons {
    margin-bottom: 50px;
    display:flex;
    justify-content:center;
  }
  
  .tab-buttons button {
    font-size: 20px;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px 20px;
    cursor: pointer;
    color: #16001e;
    transition: all ease-in-out 0.2s;
    border-bottom: 2px solid transparent;
  }
  .tab-buttons .active {
    border-bottom: 2px solid #16001e;
    color: black;
  }
`;