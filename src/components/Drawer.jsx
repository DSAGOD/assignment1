import React, { useState, useEffect } from "react";
import "./Drawer.css";
import axios from "axios";
import Detaileddrawer from "./Detaileddrawer";

function Drawer() {
  const [data, setData] = useState([]);
  const [currpage, setCurrpage] = useState(1);
  const [show, setShow] = useState(false);
  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setData(res.data);
    });
  };

  function clickHandler(id) {
    setId(id);
    setShow(true);
  }

  useEffect(() => {
    getData();
  }, []);

  let pages = Math.ceil(data.length / 3);
  let pagearr = [];
  for (let i = 1; i <= pages; i++) {
    pagearr.push(i);
  }
  let si = (currpage - 1) * 3;
  let ei = +si + +3;
  let temp = [];
  temp = data.slice(si, ei);
  const [id, setId] = useState("");
  const showDetail = (id) => {
    setShow(true);
    console.log(show);
    setId(id);
  };
  const [selected, setSelected] = useState(null);
  const [ht, setHt] = useState("8rem");
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="main-pg">
      {temp.map((temp) => (
        <>
          <div className="row" style={{ height: ht }}>
            <div className="name_container">
              <h3>{temp.username}</h3>
            </div>
            <div className="section-1">
              <h3 className="bold">Contact</h3>
              <h3>{temp.name}</h3>
            </div>
            <div className="section-1">
              <h3 className="bold">City</h3>
              <h3>{temp.address.city}</h3>
            </div>
            <div className="section-1">
              <h3 className="bold">Street</h3>
              <h3>{temp.address.street}</h3>
            </div>
            <div className="name_container">
              <button
                className="button-24"
                role="button"
                onClick={() => {
                  clickHandler(temp.id);
                }}
              >
                View Details
              </button>
            </div>
            {show === true && id === temp.id ? (
              <Detaileddrawer temp={temp} id={id} />
            ) : null}
            {/* {
            (show===true && id===temp.id) ? setHt('10rem') : null
          } */}
          </div>
        </>
      ))}
      {pagearr.filter((pg) => (
        <div class="pagination">
          <a href="#">&laquo;</a>
          {
             <a href="#">{pg}</a>
          }
          <a href="#">&raquo;</a>
        </div>
      ))}
    </div>
  );
}

export default Drawer;
