import React from 'react';
import classes from "./hello.module.css"
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const Hello = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <h1 className={classes.h}>
                    Добро пожаловать на <green>Colorcaridentifier.com</green>!
                </h1>
                <p className={classes.p}>
                    Наша цель - научить нейронную сеть различать цвета автомобилей.<br />
                    На данный момент точность нейронной сети составляет <green>90%</green>.<br />
                    В обучении нейронной сети задействовано <green>10801 изображений</green>.<br />
                    <medium>Используя данный сервис вы помогаете нам в обучении модели.</medium><br />
                    <br />
                    <grey>Проект полностью опенсорс, с исходным кодом можно ознакомиться по ссылке:</grey><br />
                    <a href={"https://github.com/haleck/TUSUR-ML-PRACTICE"} target={"_blank"}>
                        <green>https://github.com/haleck/TUSUR-ML-PRACTICE</green>
                    </a>
                </p>
                <Button onClick={()=>navigate("../upload")}>Попробовать</Button>
            </div>
        </div>
    );
};

export default Hello;