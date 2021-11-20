import React,{useEffect, useState, useRef} from "react";
import Table from 'react-bootstrap/Table'
import {useSelector,useDispatch} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import {fetchNewest,setStop} from '../redusers/newestReduser'
import './screens.css'
import { compareArr } from "../tools/sort";
  export default function NewestScreen(){

      const footerRef = useRef(null)
      const dispatch = useDispatch()
      
      const [sortMode,setSortMode] = useState('1')
      
      const stop = useSelector((state)=>state.newest.stop)
      const isLoading = useSelector((state)=>{
          return state.newest.isLoading
        })
        const errorMessage = useSelector((state)=>{
            return state.newest.errorMessage
        })
        const newestArr = useSelector((state)=>{
            return state.newest.newestArr
        })
        const list = useSelector((state)=>{
            return state.newest.list
        })
        
        const fetchNewestArr = ()=>{
            dispatch(fetchNewest(1))
        } 
        const sortByDate =()=>{
            setSortMode(sortMode === '1'? '2': '1')
        }
        const [sortedArr,setSortedArr] = useState(newestArr)
        const fetchNewList = ()=>{
            dispatch(setStop(true))
            dispatch(fetchNewest(list))
           
          }
          const callback =()=>{
           
            if(list > 9 || isLoading ||stop) return
            if(footerRef.current.getBoundingClientRect().top <= window.innerHeight){
                console.log('top===',footerRef.current.getBoundingClientRect().top,'window innerHeight====',window.innerHeight)
                fetchNewList()
              setTimeout(()=>dispatch(setStop(false)))
            }}
   
        useEffect(()=>{
             window.addEventListener('scroll',callback)           
               
               return ()=>window.removeEventListener('scroll',callback)
        },[list,isLoading,stop])
      return (
    <div className = 'main1'>
        <Table striped bordered hover size="sm">
         <thead className='btop-w'>
           <tr className = 'w-100 btop-w'>
            <th className ='d-none d-sm-table-cell firstCol tableTitle'
                onClick = {sortByDate}
                >
                    Time added
                    <div className=' d-flex sortDiv p-2'style={{flexDirection: sortMode==='1'?'column':''}}>
                        <span className='sortSpan'>0</span>
                        <span className='sortSpan'>9</span>
                    </div>
                </th>
            <th className = 'vw-35 secondCol tableTitle'
                colSpan='2' 
                onClick = {()=>setSortMode(sortMode === '3'? '4': '3')}>
                    Title
                    <div className=' d-flex sortDiv p-2'style={{flexDirection: sortMode==='3'?'column':''}}>
                        <span className='sortSpan'>a</span>
                        <span className='sortSpan'>z</span>
                    </div>
            </th>
            <th className ='d-none d-sm-table-cell vw-40 secondCol tableTitle'
            colSpan='2' 
            onClick = {()=>setSortMode(sortMode === '5'? '6': '5')}>
                Domain
                <div className=' d-flex sortDiv p-2'style={{flexDirection: sortMode==='5'?'column':''}}>
                        <span className='sortSpan'>a</span>
                        <span className='sortSpan'>z</span>
                    </div>
                </th>
           </tr>
         </thead>
         <tbody>
           {newestArr?.length > 0&&newestArr.slice(0).sort(compareArr[sortMode]).map((el,i)=>{
               return (
             <tr className = 'w-100'key={el.id+''+ i}>
               <td className = 'd-none d-sm-table-cell firstCol'>
                   <div className='maxH-3 d-flex justify-content-start align-items-center w-100'>
                   {`${new Date(el.time).toString().slice(0,24)}`}
                   </div>
                </td> 
               <td className = 'secondCol'colSpan='2'>
               <div className='maxH-3 d-flex justify-content-start align-items-center w-100'>
                    <a href={el.url}className='td-none maxH-3 '>{el.title}</a>
                </div>
                </td>
               <td className = 'd-none d-sm-table-cell secondCol'colSpan="2">
                    <div className='maxH-3 d-flex justify-content-start align-items-center w-100'>
                        {el.domain}
                    
                     </div>
                </td> 
             </tr>
               )
           })
           }
            </tbody>
        </Table>
           {errorMessage && newestArr?.length === 0&&( 
                <div className = 'w-100 d-flex justify-content-between p-5 flex-column align-items-center'>
                  <span className = 'm-5'>Server no respond</span>
                  <Button variant="primary" size="lg"onClick = {fetchNewestArr}>
                       Request
                  </Button>
                </div>)}
           <div className = 'w-100 d-flex justify-content-center p-5'ref = {footerRef}>
             {isLoading &&<Spinner animation="grow" variant="primary" />}
             
               </div>
               <Button variant="primary"
                       onClick={sortByDate}
                       className = 'floatBtn d-sm-none'
                       >
                          {`Date 
                          ${sortMode === '1'?'0~9':'9~0'}`}
                </Button>
    </div>
      )}