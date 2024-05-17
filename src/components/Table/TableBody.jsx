const TableBody = ({ data, error, loading }) => {
  let content;
  let text;
  //return content based on data
  if (loading) {
    text = "Loading data...";
    content = (
      <tr className="border-b border-gray-500 ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 "
        >
          {text}
        </th>
        <td className="px-6 py-4"> {text}</td>
      </tr>
    );
  } else if (error) {
    text = "Something went wrong, please try again later...";
    content = (
      <tr className="border-b border-gray-500 ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 "
        >
          {text}
        </th>
        <td className="px-6 py-4"> {text}</td>
      </tr>
    );
  } else if (data && data.length > 0) {
    content = data.map((item, index) => {
      return (
        <tr className="border-b border-gray-500 " key={index}>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-200 "
          >
            {item.Category}
          </th>
          <td className="px-6 py-4">{item.Event}</td>
        </tr>
      );
    });
  }

  return <tbody>{content}</tbody>;
};
export default TableBody;
