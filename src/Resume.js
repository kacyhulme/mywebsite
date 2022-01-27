import { Link } from "react-router-dom";
import ResumeHTML from './resumehtml.js'

function Resume() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Resume</h2>
      <ResumeHTML/>
    </div>
  )
}

export default Resume;
