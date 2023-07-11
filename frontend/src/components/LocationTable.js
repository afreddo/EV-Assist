import TableHeader from "./TableHeader.js"

function LocationTable({locationData}){
    return(
        <table>
            <TableHeader />
            <tbody>
                <tr>
                    <td>{locationData.name[0]}</td>
                    <td>{locationData.location[0]}</td>
                    <td>{locationData.distance[0]}</td>
                </tr>
                <tr>
                    <td>{locationData.name[1]}</td>
                    <td>{locationData.location[1]}</td>
                    <td>{locationData.distance[1]}</td>
                </tr>
                <tr>
                    <td>{locationData.name[2]}</td>
                    <td>{locationData.location[2]}</td>
                    <td>{locationData.distance[2]}</td>
                </tr>
                <tr>
                    <td>{locationData.name[3]}</td>
                    <td>{locationData.location[3]}</td>
                    <td>{locationData.distance[3]}</td>
                </tr>
                <tr>
                    <td>{locationData.name[4]}</td>
                    <td>{locationData.location[4]}</td>
                    <td>{locationData.distance[4]}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default LocationTable;