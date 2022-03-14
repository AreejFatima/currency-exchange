import styled from 'styled-components';


export const TableStyle = styled.div `
  border-collapse: collapse;
  width: 60vw;
  height: 50%;
  margin:0 auto; 
  display:table;
  margin-bottom:5rem;

  th:first-child{
    border-radius:4px 0 0 4px;
    padding-left:6rem;
  }
  
   th:last-child{
    border-radius:0 4px 4px 0;
    padding-right:6rem;
  }

  td, th {
    padding: 12px;
  text-align:left;
  }

  th {
    background-color: #16001e;
    color: white;
    &:nth-child(4){
      text-align:center;
    }
    &:nth-child(5){
      text-align:center;
    }
  }

  tr:hover{
    background:linear-gradient(45deg, #52376ea6, transparent);
  }

.delete-button{
 margin-left:3rem;
 color:#cc3434;
}

.table-chart{
  margin-left:2.5rem;
}

.header-row{
  background:#bda7c3;
  color:white;

  td{
    height:3rem;  
  }
  
  .Dropdown-control{
    width:inherit;
    font-size:14px;
    max-width:15rem;
    padding:1.2rem;
    border-radius:5px;
    height:inherit;
    background:#bda7c3;
    color:white;
    
}

.Dropdown-menu{
    width:15rem;
}

.Dropdown-placeholder{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

}

.country{
  width:250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row-flags{
  margin-right:1rem;
  
}

`;

export const OperationStyle = styled.div `

display:inline-block;
vertical-align:top;
margin-left:19rem;

@media (max-width: 376px){
  margin-left:0
}

.Dropdown-control{
  font-size:14px;
  max-width:15rem;
  padding:1.2rem;
  border-radius:5px;
  height:inherit;
  background:rgb(232 225 237 / 90%);
  color:#16001e;
  border:1px solid rgb(183 167 198);
  margin-bottom:8px;
}

.Dropdown-menu{
  width:15rem;
}

.Dropdown-placeholder{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.country{
width:250px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.add-button{
  display:flex;
  align-items:center;
  color:rgb(33 27 27 / 80%);

  h3{
    margin-left:4px;
  }
  
}
`