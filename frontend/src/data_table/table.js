function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Station Name</th>
                    <th>Location</th>
                    <th>Distance</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.location}</td>
                            <td>{data.distance}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;