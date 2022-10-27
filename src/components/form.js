import React, { useState } from "react";
import "./form.css";
import Response from "./response";

export default function Form() {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [cName, setcName] = useState("");
  const [dName, setdName] = useState("");
  const [key, setKey] = useState("");

  const parseName = (pattern) => {
    const nameArray = name.split(",");
    const firstLast = [];
    const emails = [];
    nameArray.forEach((name) => {
      const splitName = name.split(" ");
      firstLast.push({
        first: splitName[0],
        last: splitName[1],
      });
    });
    firstLast.forEach((name) => {
      const first = name.first;
      const last = name.last;

      const patParse = pattern.replaceAll("{", "${");
      let tpl = eval("`" + patParse + "`");
      const email = `${tpl}@${dName}`;
      emails.push({ email: email, name: first });
    });
    setInfo(emails);
  };
  // b450daca34a2334e51067cbab39031a5cf76d4ef;

  const getDomain = async (event) => {
    event.preventDefault();
    setInfo([]);
    if (dName && cName) {
      const url = `https://api.hunter.io/v2/domain-search?domain=${dName}&company=${cName}&api_key=${key}`;
      try {
        const resp = await fetch(url);
        var data = await resp.json();
        parseName(data.data.pattern);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={getDomain}>
        <label htmlFor="key">key</label>
        <input
          onChange={(e) => setKey(e.target.value)}
          name="key"
          label="key"
        />
        <label htmlFor="name">Names</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          label="name"
        />
        <label htmlFor="cName">Company Name</label>
        <input
          onChange={(e) => setcName(e.target.value)}
          name="cName"
          label="cName"
        />
        <label htmlFor="dName">Domain Name</label>
        <input
          onChange={(e) => setdName(e.target.value)}
          name="dName"
          label="dName"
        />
        <button type="submit"> Submit </button>
      </form>

      {info.map((info) => (
        <Response key={Math.random()} info={info} cName={cName}></Response>
      ))}
    </>
  );
}
