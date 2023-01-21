function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Distance</th>
                    <th>Street Name</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.streetName}</td>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;