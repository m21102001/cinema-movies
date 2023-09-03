import styles from './Report.module.scss'
import { MdFilterListAlt } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi'
const index = () => {
  return (
    <div className={`shadow p-3 mb-5 bg-body rounded ${styles.root}`}>
      <div className='d-flex justify-content-between mx-3 fs-4 fw-semibold'>
        <p >Reports</p>
        <MdFilterListAlt />
      </div>
      <hr />
      <div className='d-flex fs-3 fw-semibold'>
        <h4 className='mx-3'>Today Date</h4> <BiCalendar />
      </div>
      <h5 className='my-3 ms-4 text-start '>Today Top Movies</h5>
      <div className="row">
        <div className="col">
          <p className='fw-semibold'>Movie Name</p>
          <span>Spider-Man</span>
        </div>
        <div className="col">
          <p className='fw-semibold'>Sold Tickets</p>
          <span>560</span>
        </div>
        <div className="col">
          <p className='fw-semibold'>Returned Tickets</p>
          <span>55</span>
        </div>
        <div className="col">
          <p className='fw-semibold'>Total Tickets</p>
          <span>505</span>
        </div>
        <div className="col">
          <p className='fw-semibold'>Total Sales</p>
          <span>$5555</span>
        </div>
      </div>
    </div>
  )
}

export default index
