import React, {useEffect, useState} from 'react';
import classes from "./success.module.css"
import Button from "../components/Button";
import checkmark from "../assets/checkmark.png"
import {useNavigate} from "react-router-dom";

const Success = () => {
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
            <img  src={checkmark} alt={'success'}/>
            <div className={classes.header}>
                Данные успешно Сохранены. Спасибо.
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

export default Success;