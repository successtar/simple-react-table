import React from "react";
import SimpleTable from "../simple-react-table"
import {testData} from '../testData';
import "../simple-react-table.scss"

const Sample5 = _ => {

  const formatDate = date => {
    const event = new Date(date);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
    return date ? event.toLocaleDateString('en-US', options) : "None";  
  }

  return (
    <div className="App">
        <h2>
          5. Simple React Table With Column Specification, Data Format, No Search Box, and 20 Row Per Page
          <small>
            <a href="/" style={{float: "right", fontWeight: "bold"}}>
              View Source
            </a>
          </small>
          <br/><br/>
        </h2>
        <SimpleTable
          data={testData}
          columns={[
                    {title:"S/N", format: row => (row._index + 1)},
                    {title:"NAME", key: "name"},
                    {title:"POSITION", key: "position"},
                    {title:"OFFICE", key: "office"},
                    {title:"SALARY", key: "salary"},
                    {title:"DATE", format: row => formatDate(row.start_date)},
                  ]} 
          searchBox={false}
          rowPerPage={20}
        />
    </div>
  );
}

export default Sample5;