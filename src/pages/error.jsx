import React, {useEffect, useState} from 'react';
import classes from "./error.module.css"
import {useNavigate} from "react-router-dom";
import Button from "../components/Button";
import warning from '../assets/warning.png'

const Error = () => {
    let navigate = useNavigate()

    let [sec, setSec] = useState(5)

    useEffect(()=>{
        let timer = setInterval(()=>{
            setSec((sec)=>sec-1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(()=>{
        if (sec <= 0) {
            navigate('/upload')
        }
    }, [sec])


    return (
        <div className={classes.container}>
            <img  src={warning} alt={'success'}/>
            <div className={classes.header}>
                Ошибка на стороне сервера.
            </div>
            <Button onClick={()=>navigate('/upload')}>
                Вернуться на главную
            </Button>
            <div className={classes.redirect}>
                Вы будете перенаправлены через {sec}...
            </div>
        </div>
    );
};

export default Error;