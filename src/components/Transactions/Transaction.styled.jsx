import styled from '@emotion/styled'


export const TableContainer = styled.div`
display:flex;
justify-content: center;
`;

export const TableHead = styled.thead`
justify-content: space-around;
background-color: darkolivegreen;
height:100%;
width:100%;
flex-column:reverse;
`;

export const TableContainerBody = styled.tbody`
display:flex;
flex-direction:column;
justify-content: center;
`;

export const TableHeadCell = styled.th`
`;

export const TableItemCell = styled.tr`
display:flex;
justify-content: space-between;
`;

export const TableCell = styled.td`
margin-top:10px;
display:flex;
margin-left:10px;
width:80px;
height:60px;
text-align:center;
justify-content: center;
align-items:center;
margin-bottom:10px;
border-radius:5px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
0px 2px 2px rgba(0, 0, 0, 0.12);
background-color:darkolivegreen;
`;




