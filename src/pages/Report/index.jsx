import React, { useEffect, useState, useRef } from 'react';
import styles from './Report.module.scss';
import { MdFilterListAlt } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import axios from 'axios';
// import { useReactToPrint } from 'react-to-print';
const baseURL =
  'https://miracle49-001-site1.itempurl.com/api/testing/reports/tickets?SystemDate=2023-09-03';

const index = () => {
  const componentRef = useRef();
  const [post, setPost] = useState([]);

  // const handelPrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: 'emp-data',
  //   onAfterPrint: () => alert('print success'),
  // });
  useEffect(() => {
    axios
      .get(baseURL)
      .then((result) => {
        console.log(result.data);
        setPost(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!post) return null;
  return (
    <div
      ref={componentRef}
      className={`shadow p-3 mb-5 bg-body rounded ${styles.root}`}
    >
      <div className="d-flex justify-content-between mx-3 fs-4 fw-semibold">
        <p>Reports</p>
        <MdFilterListAlt />
      </div>
      <hr />
      <div className="d-flex fs-3 fw-semibold">
        <h4 className="mx-3">Today Date</h4> <BiCalendar />
      </div>
      <h5 className="my-3 ms-4 text-start ">Today Top Movies</h5>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Movie Name</th>
            <th scope="col">Sold Tickets</th>
            <th scope="col">Returned Tickets</th>
            <th scope="col">Total Tickets</th>
            <th scope="col">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {/* {post?.map((data, index) => { */}
          {/* return ( */}
          {/* <tr key={index}> */}
          <tr>
            <th scope="row">{post.title}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>{post.totalPriceForAll}</td>
          </tr>
          {/* ); */}
          {/* })} */}
        </tbody>
      </table>
      <button
        onClick={handelPrint}
        type="button"
        className="btn btn-outline-primary"
      >
        Print
      </button>
    </div>
  );
};

export default index;
