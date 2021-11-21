import React, {useState,useEffect} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import NewsScreen from "./screens/screen_1";
import NewestScreen from "./screens/scr_2";
import {hot} from "react-hot-loader";
import {fetchNews} from '../src/redusers/newsReduser'
import { fetchNewest } from "./redusers/newestReduser";
import { useDispatch,useSelector } from "react-redux";
import {setSortMode} from '../src/redusers/comonReduser'
import Button from 'react-bootstrap/Button'
   function App(){
       const dispatch = useDispatch()
       const list1 = useSelector((state)=>state.news.list)
       const list2 = useSelector((state)=>state.newest.list)
     const [key,setKey] = useState('1')
     const sortMode = useSelector((state)=>state.comon.sortMode)
useEffect(()=>{
    list1 < 10 && dispatch(fetchNews(list1))
},[])
    const clickSecondTab = ()=>{
      if(list2 === 1){dispatch(fetchNewest(list2))}
      setKey('2')
    }
    const sortByDate = ()=>{
      dispatch(setSortMode(sortMode === '1'? '2': '1'))
    }
       return (
       
    <div className = 'mainAppDiv'>             
      <Nav variant="tabs"defaultActiveKey={key} >
        <Nav.Item onClick={()=>setKey('1')}className='nav'>
        <Nav.Link eventKey="1">News</Nav.Link>
        </Nav.Item>
        <Nav.Item iventKey='2' onClick={clickSecondTab}className='nav'>
        <Nav.Link eventKey="2">Newest</Nav.Link>
        </Nav.Item>
  
    </Nav>
               {key === '1' ? <NewsScreen/> : <NewestScreen/>}
               <Button variant="primary"
                       onClick={sortByDate}
                       className = 'floatBtn d-sm-none'
                       >
                          {`Date 
                          ${sortMode === '1'?'0~9':'9~0'}`}
                </Button>
            </div>
           
         
           
       )
   }
   export default hot(module)(App);