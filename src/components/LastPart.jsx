
import React, { useEffect, useState } from 'react';
import { Slider, Switch } from 'antd';
import style from "../SCSS/LastPart.module.scss"

const LastPart = ()=>{

    const [emp,setEmp] = useState(12)
    const [age,setAge] = useState(65)

    const handleChangeEmp = (e)=>{
        setEmp(e)
    }
    const handleChangeAge = (e)=>{
        setAge(e)
    }

    // useEffect(()=>{
    //     console.log(window.scrollY)
    // },[window])

    return <div id={style.LastPart}>
        <div id={style.part1}>
            <h3>Retorement Strayegy</h3>
            <div id={style.meters}>
                <div>
                    <h5>Employee Contribution</h5>
                    {/* <input type="range" name="" id="" />
                     */}
                     <div>
                        <Slider defaultValue={emp} onChange={handleChangeEmp} style={{width:"80%"}} />
                        <p>{emp}%</p>
                     </div>
                </div>
                <div>
                    <h5>Retirement Age</h5>
                    {/* <input type="range" name="" id="" />
                     */}
                     <div>
                        <Slider defaultValue={age} onChange={handleChangeAge} style={{width:"80%"}} />
                        <p>{age}%</p>
                     </div>
                </div>
            </div>
            <div id={style.intrestPart}>
                <div>
                    <h5>Employer Contribution</h5>
                    <p>8.4%</p>
                </div>
                <div>
                    <h5>Interest Rate</h5>
                    <p>5%</p>
                </div>
                <div>
                    <button>Update</button>
                </div>
                <div>
                    <p>View Help Docs ›</p>
                </div>
            </div>
        </div>
        <div id={style.part2}>
            <p>Are you considering a</p>
            <h5>Housing Advance?</h5>
            <p>Limited time reduced intrest.</p>
            <p>Learn More ›</p>
        </div>
        <div id={style.part3}>

        </div>
    </div>
}

export default LastPart



// const App: React.FC = () => {
//   const [disabled, setDisabled] = useState(false);

//   const onChange = (checked: boolean) => {
//     setDisabled(checked);
//   };

//   return (
//     <>
      
//       <Slider range defaultValue={[20, 50]} disabled={disabled} />
//       Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
//     </>
//   );
// };

// export default App;