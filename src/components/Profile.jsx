import style from "../SCSS/Profile.module.scss"
import profileIMage from "../Media/profileImage.png"
import { FaCaretDown } from "react-icons/fa";


const Profile = ()=>{
    return <div id={style.Profile}>
        <div id={style.part1}>
            <div>
                <img src={profileIMage} alt="Profile Image" />
            </div>
            <div>
                <h2>Hi Aniket,</h2>
                <p>welcome back</p>
            </div>
        </div>
        <div id={style.part2}>
            <h4>Today</h4>
            <div>
                <h2>$19,892</h2>
                <p>Account Balance</p>
            </div>
            <div>
                <h3>$4,000</h3>
                <p>Year-to-Date Contributions</p>
            </div>
            <div>
                <h3>$1,892</h3>
                <p>Total Interest</p>
            </div>
            <div>
                <button>
                    I want to <FaCaretDown/>
                </button>
            </div>
        </div>
        <div id={style.part3}>
            <h3>Recent Transactions</h3>
            <div>
                <p>2020-08-07</p>
                <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
            <div>
                <p>2020-07-21</p>
                <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
            <div>
                <p>2020-07-16</p>
                <h4>Withdrawal Transfer to Bank-XXX11</h4>
            </div>
        </div>
    </div>
}

export default Profile;