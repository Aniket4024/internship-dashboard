import './App.scss';
import LastPart from './components/LastPart';
import MenuBar from './components/MenuBar';
import MiddlePart from './components/MiddlePart';
import Profile from './components/Profile';
import { Badge } from 'antd';
import { IoHomeOutline } from "react-icons/io5";
import { TbArticle, TbLogout } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { FaRegBell, FaRegNewspaper, FaRegUser, FaSearch } from "react-icons/fa";
import { useState } from 'react';


function App() {


    const [active1,setActive1] = useState(true)
    const [active2,setActive2] = useState(false)
    const [active3,setActive3] = useState(false)
    const [active4,setActive4] = useState(false)
    const [active5,setActive5] = useState(false)

  return (
    <div className="App">
      <div>
          <Badge dot color='#85afff' style={{marginRight:"40px"}}>
              <FaRegBell fontSize={"20px"} color='gray' style={{marginRight:"40px"}}/>
          </Badge>
      </div>
      <MenuBar/>
      <Profile/>
      <MiddlePart/>
      <LastPart/>
      <div>
        <div 
          id={active1?"active":""}
          onClick={()=>{
            setActive1(true)
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setActive5(false)
          }}
        >
          <IoHomeOutline style={{marginBottom:"5px"}}/>
        </div>
        <div
          id={active2?"active":""}
          onClick={()=>{
            setActive1(false)
            setActive2(true)
            setActive3(false)
            setActive4(false)
            setActive5(false)
          }}
        >
          <FaRegNewspaper style={{marginBottom:"5px"}}/>
        </div>
        <div
          id={active3?"active":""}
          onClick={()=>{
            setActive1(false)
            setActive2(false)
            setActive3(true)
            setActive4(false)
            setActive5(false)
          }}
        >
          <TbArticle style={{marginBottom:"5px"}}/>
        </div>
        <div
          id={active4?"active":""}
          onClick={()=>{
            setActive1(false)
            setActive2(false)
            setActive3(false)
            setActive4(true)
            setActive5(false)
          }}
        >
            <FaRegUser fontSize={"15px"} style={{marginBottom:"5px"}}/>
        </div>
        <div
          id={active5?"active":""}
          onClick={()=>{
            setActive1(false)
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setActive5(true)
          }}
        >
          <BiSearch style={{marginBottom:"5px"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
