const TableBody = ({ data, error, loading }) => {
  let content;
  if (loading) {
    content = (
      <tr className="tableBodyRow">
        <th scope="row" className="rowHeader">
          Loading data...
        </th>
        <td> Loading data...</td>
      </tr>
    );
  } else if (error) {
    console.log(error);
    content = (
      <tr className="tableBodyRow">
        <th scope="row" className="rowHeader">
          Something went wrong, please try again later...
        </th>
        <td> Something went wrong, please try again later...</td>
      </tr>
    );
  } else if (data && data.length > 0) {
    content = data.map((item, index) => {
      return (
        <tr className="tableBodyRow" key={index}>
          <th scope="row" className="rowHeader">
            {item.Category}
          </th>
          <td>{item.Event}</td>
        </tr>
      );
    });
  }

  return <tbody>{content}</tbody>;
};
export default TableBody;
