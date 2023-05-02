import React, { useState } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, error, data] = useFetch(searchTerm);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input value={searchTerm} type="text" onChange={handleChange}></input>
      {!loading &&
        !error &&
        data.map((d) => {
          return <div key={d._version_}>{d.title}</div>;
        })}
      {loading && <div>Loading....</div>}
      {error && <div>Error</div>}
    </div>
  );
};

export default Fetch;
