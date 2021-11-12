import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useFilter, useFilterParam } from "../Filter/Filter"
import * as styles from "./JobListingFilter.module.css"

const JOB_MODE = 0
const MANAGER_MODE = 1

function JobListingFilter(props) {
  const filter = useFilter('/position/get', props.setResult)
  const [minSalary, setMinSalary] = useFilterParam(null, 'minSalary', filter)
  const [maxSalary, setMaxSalary] = useFilterParam(null, 'maxSalary', filter)
  const [jobTitle, setJobtitle] = useFilterParam(null, 'title', filter)
  const managerFilter = useFilter('/position/get', props.setResult)
  const [managerName, setManagerName] = useFilterParam(null, 'managerName', managerFilter)
  const [filterMode, setFilterMode] = useState(JOB_MODE)

  return (
    <Container>
      <Row className={styles.menu} xs='auto'>
        <Col>Filter by:</Col>
        <Col>
          <button onClick={() => setFilterMode(JOB_MODE)} disabled={filterMode==JOB_MODE}>
            Job Details
          </button>
          <button onClick={() => setFilterMode(MANAGER_MODE)} disabled={filterMode==MANAGER_MODE}>
            Manager Info
          </button>
        </Col>
      </Row>
      {filterMode == JOB_MODE
      ?
      <>
      <Row className={styles.row1} xs='auto'>
        <Col>Job Title <Input value={jobTitle} onChange={setJobtitle}/></Col>
        <Col>
        Salary range <Input value={minSalary} onChange={setMinSalary}/>-<Input value={maxSalary} onChange={setMaxSalary} />
        </Col>
        <Col>
          <button className={styles.clearButton}
          onClick={() => {
            setJobtitle(undefined)
            setMinSalary(undefined)
            setMaxSalary(undefined)
          }}>
            Clear
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs='auto'>Tag <input/></Col>
      </Row>
      </>
      :
      <div>
      </div>}
    </Container>
  )
}

function Input(props) {
  return <input {...props} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
}

export default JobListingFilter