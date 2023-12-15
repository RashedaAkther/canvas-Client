import useAgentSoldProperties from "../../../Hooks/useSoldProperty";

const AgentSoldProperties = () => {
  const [Property, refetch, isLoading] = useAgentSoldProperties();
  console.log(Property);
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leadi">SOLD PROPERTIES</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-yellow-200 text-yellow-600">
              <tr className="text-left">
                <th className="p-3">Property</th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {Property?.map((p) => (
                <tr
                  key={p?._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">
                    <p>
                      <img className="w-10 h-10" src={p?.image} alt="" />
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{p?.buyerName}</p>
                    <p>{p?.buyerEmail}</p>
                  </td>
                  <td className="p-3">
                    <p>{p?.buyingDate}</p>
                    <p className="dark:text-gray-400">{p?.location}</p>
                  </td>
                  <td className="p-3">
                    <p>{p?.title}</p>
                    <p className="dark:text-gray-400">Tuesday</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>${p?.offerAmount}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <span>{p?.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentSoldProperties;
