import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';


// Table data as a list of array.
const rows = [
  "first row",
  "second row",
  "third row"
  // .... and more
];

// Custom cell implementation with special prop
const MyCustomCell = ({ mySpecialProp }) =>(
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>
);

// Render your table
class MyTable extends React.Component {
render(){
return(

  <Table
    rowHeight={50}
    rowsCount={rows.length}
    width={5000}
    height={5000}
    headerHeight={50}>
    <Column
      header={<Cell>Col 1</Cell>}
      cell={<Cell></Cell>}
      width={2000}>Hi</Column>
    <Column
      header={<Cell>Col 2</Cell>}
      cell={<MyCustomCell mySpecialProp="column2" />}
      width={1000}
    />
    <Column
      header={<Cell>Col 3</Cell>}
      cell={({rowIndex, ...props}) => (
        <Cell {...props}>
          Data for column 3: {rows[rowIndex]}
        </Cell>
      )}
      width={2000}
    />
  </Table>);
}
}

export default MyTable;