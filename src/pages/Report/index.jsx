import styles from './Report.module.scss'
import { MdFilterListAlt } from 'react-icons/md';

const index = () => {
  return (
    <div className={`shadow p-3 mb-5 bg-body rounded ${styles.root}`}>
      <div className='d-flex justify-content-between mx-3 fs-4 fw-semibold'>
        <p >Reports</p>
        <MdFilterListAlt />
      </div>
    </div>
  )
}

export default index
