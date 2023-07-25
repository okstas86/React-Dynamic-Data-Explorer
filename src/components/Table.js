import React from "react";

const Table = ({ data }) => {
  return (
    <tbody>
      {data.map((data) => (
        <tr key={data.id}>
          <td className="id-column">{data.id}</td>
          <td className="title-column">{data.title}</td>
          <td className="description-column">{data.body}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Table;
