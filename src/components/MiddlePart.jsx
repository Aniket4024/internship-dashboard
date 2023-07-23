import { FaCaretDown } from "react-icons/fa"
import style from "../SCSS/MiddlePart.module.scss"
import BarChart from "./BarChart"
import RingChart from "./RingChart"

const MiddlePart = ()=>{
    return <div id={style.main}>
        <div id={style.MiddlePart}>
            <div>
                <p>Retirement Income</p>
                <h1>Starting Year 2056</h1>
            </div>
            <div>
                <div>
                    <h2>$300,000</h2>
                    <p>My Goal</p>
                </div>
                <div>
                    <h2>59%</h2>
                    <p>Goal Achieved</p>
                </div>
                <div>
                    <h2>$300</h2>
                    <p>Est. Monthly Income</p>
                </div>
            </div>
            <div>
                <h3>Contributions Overtime</h3>
                <BarChart/>
            </div>
            <div>
                <h3>How do I compare to my peers?</h3>
                <p>These numbers represent current goal achievement</p>
                <div>
                    <div id={style.details}>
                        <div>
                            <h5>Age : </h5>
                            <p>Under 30 <FaCaretDown/></p>
                        </div>
                        <div>
                            <h5>Salary : </h5>
                            <p>K 20 - K 30 <FaCaretDown/></p>
                        </div>
                        <div>
                            <h5>Gender : </h5>
                            <p>Male <FaCaretDown/></p>
                        </div>
                    </div>
                    <div id={style.ringChart}>
                        <div>
                            <div>
                                <RingChart percent={0.78} />
                            </div>
                            <h5>Average</h5>
                        </div>
                        <div>
                            <div>
                                <RingChart percent={0.95}/>
                            </div>
                            <h5>Top</h5>
                        </div>
                        <div>
                            <div>
                            <RingChart percent={0.59}/>
                            </div>
                            <h5>Me</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MiddlePart