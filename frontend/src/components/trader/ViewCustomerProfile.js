import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewCustomerProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios.get("/customer").then((res) => {
        setData(res.data);
      }))();
  }, []);

  return (
    <div>
      <h1>customer Profiles</h1>
      <table>
        <tr style={{ border: "1px" }}>
          <th>name</th>
          <th>age</th>
          <th>gender</th>
        </tr>
        {data.map((value) => (
          <tr key={value?.name}>
            <td> {value?.name}</td>
            <td>{value?.age}</td>
            <td>{value?.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ViewCustomerProfile;
