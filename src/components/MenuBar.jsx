import React from 'react';
import style from "../SCSS/MenuBar.module.scss"
import logo from "../Media/logo.png";
import { FaRegBell, FaRegNewspaper, FaRegUser, FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TbArticle, TbLogout } from "react-icons/tb";
import { useState } from "react";
import { Badge } from 'antd';
// import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';


const MenuBar = ()=>{

    const [active1,setActive1] = useState(true)
    const [active2,setActive2] = useState(false)
    const [active3,setActive3] = useState(false)
    const [active4,setActive4] = useState(false)

    return <div id={style.MenuBar}>
        <div id={style.part1}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <FaSearch style={{cursor: "pointer"}}/>
                
            </div>
        </div>
        <div id={style.part2}>
            <div 
                id={active1 ? style.active : ""}
                onClick={()=>{
                    setActive1(true)
                    setActive2(false)
                    setActive3(false)
                    setActive4(false)
                }}
            >
                <IoHomeOutline fontSize={"22px"} />
            </div>
            <div 
                id={active2 ? style.active : ""}
                onClick={()=>{
                    setActive1(false)
                    setActive2(true)
                    setActive3(false)
                    setActive4(false)
                }}
            >
                <FaRegNewspaper/>
            </div>
            <div 
                id={active3 ? style.active : ""}
                onClick={()=>{
                    setActive1(false)
                    setActive2(false)
                    setActive3(true)
                    setActive4(false)
                }}
            >
                <TbArticle/>
            </div>
            <div 
                id={active4 ? style.active : ""}
                onClick={()=>{
                    setActive1(false)
                    setActive2(false)
                    setActive3(false)
                    setActive4(true)
                }}
            >
                <FaRegUser/>
            </div>
        </div>
        <div id={style.part3}>
                <div>
                <Badge dot color='#85afff'>
                    <FaRegBell fontSize={"20px"} color='gray'/>
                </Badge>
                </div>
                <div>
                    <TbLogout fontSize={"22px"}/>
                </div>
        </div>
    </div>
}

export default MenuBar








// const ButtonGroup = Button.Group;

// const App: React.FC = () => {
//   const [count, setCount] = useState(5);
//   const [show, setShow] = useState(true);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decline = () => {
//     let newCount = count - 1;
//     if (newCount < 0) {
//       newCount = 0;
//     }
//     setCount(newCount);
//   };

//   const random = () => {
//     const newCount = Math.floor(Math.random() * 100);
//     setCount(newCount);
//   };

//   const onChange = (checked: boolean) => {
//     setShow(checked);
//   };

//   return (
//     <Space direction="vertical">
//       <Space size="large">
//         <Badge count={count}>
//           <Avatar shape="square" size="large" />
//         </Badge>
//         <ButtonGroup>
//           <Button onClick={decline} icon={<MinusOutlined />} />
//           <Button onClick={increase} icon={<PlusOutlined />} />
//           <Button onClick={random} icon={<QuestionOutlined />} />
//         </ButtonGroup>
//       </Space>
//       <Space size="large">
        
//         <Switch onChange={onChange} checked={show} />
//       </Space>
//     </Space>
//   );
// };

// export default App;