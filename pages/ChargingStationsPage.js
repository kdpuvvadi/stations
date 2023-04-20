import chargingStationsData from "./api/stations.json";

const ChargingStationsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Charging Stations</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Operator</th>
            <th className="border px-4 py-2">Connector Type</th>
            <th className="border px-4 py-2">Connectors</th>
            <th className="border px-4 py-2">Charge Speed</th>
            <th className="border px-4 py-2">Price per KWh</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">Area</th>
            <th className="border px-4 py-2">Directions</th>
          </tr>
        </thead>
        <tbody>
          {chargingStationsData.chargingStations.map((station) => (
            <tr key={station}>
              <td className="border px-4 py-2">{station.id}</td>
              <td className="border px-4 py-2">{station.name}</td>
              <td className="border px-4 py-2">{station.operator}</td>
              <td className="border px-4 py-2">{station.charge[0].connector}</td>
              <td className="border px-4 py-2">{station.charge[0].Connectors} No.s</td>
              <td className="border px-4 py-2">{station.charge[0].power}</td>
              <td className="border px-4 py-2">₹ {station.price}</td>
              <td className="border px-4 py-2">{station.status}</td>
              <td className="border px-4 py-2">{station.location[0].city}</td>
              <td className="border px-4 py-2">{station.location[0].area}</td>
              <td className="border px-4 py-2">
                <a
                  href={`https://maps.google.com/?q=${station.location[0].latitude},${station.location[0].longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Directions
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargingStationsPage;
