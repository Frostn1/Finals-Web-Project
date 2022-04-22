import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login'


const Home = ({ isSigned }) => {
    

  return (
    <div>
        <div class="menu">
        <div class="label">Ace</div>
        <div class="spacer"></div>
        <div class="item"><span>home</span></div>
        <div class="item"><span>catalog</span></div>
        <div class="item"><span>buyings</span></div>
        <div class="item"><span>manager</span></div>
        {isSigned ? <div class="item"><span>profile</span></div> : <></>}
        <div class="item"><span>data</span></div>
        {!isSigned ? <div class="item"><span>log in</span></div> : <></>}
        {/* <Route path='/login' component={Login}></Route> */}
        </div>
    </div>
  )
}

export default Home