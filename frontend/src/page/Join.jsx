import React, { useRef } from 'react'
import api from '../api'
import {useNavigate} from 'react-router-dom'

const Join = () => {

  const id_ref = useRef()
  const pw_ref = useRef()
  const nick_ref = useRef()
  const navigate = useNavigate()

  const sendJoin = async (e) =>{
    e.preventDefault()

    let joinData = {
        id : id_ref.current.value,
        pw : pw_ref.current.value,
        nick : nick_ref.current.value
    } 

    let res = await api.post('/user/join', joinData)

    console.log(res.data);
    
    if(res.data.result === "success"){
        navigate("/");
    }else{
        alert("회원가입 오류발생");
    }
  }

  return (
    <div className='content'>
         <form onSubmit={sendJoin}>
            <p>
                <label>ID: </label>
                <input type='text' ref={id_ref}/>
            </p>
            <p>
                <label>PW: </label>
                <input type='password' ref={pw_ref}/>
            </p>
            <p>
                <label>NICK: </label>
                <input type='text' ref={nick_ref}/>
            </p>
            <p>
                <input type='submit' value='Join'/>
            </p>
        </form>
    </div>
  )
}

export default Join