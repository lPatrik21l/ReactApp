const TableBody = ({ data, error, loading }) => {
  let content;
  let text;
  if (loading) {
    text = "Loading data...";
    content = (
      <tr className="tableBodyRow">
        <th scope="row" className="rowHeader">
          {text}
        </th>
        <td> {text}</td>
      </tr>
    );
  } else if (error) {
    text = "Something went wrong, please try again later...";
    console.log(error);
    content = (
      <tr className="tableBodyRow">
        <th scope="row" className="rowHeader">
          {text}
        </th>
        <td>{text}</td>
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
