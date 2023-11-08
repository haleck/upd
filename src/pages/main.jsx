import React, {useEffect, useState} from 'react';
import classes from "./main.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../components/Button";

const Main = () => {
    const location = useLocation()
    const file = location.state.file
    const imageUrl = URL.createObjectURL(file)

    const navigate = useNavigate()

    let resultReceived = useState(true)
    let result = useState('Серый')

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBlock}>
                {resultReceived &&
                    <div className={classes.imgTag}>
                        Цвет автомобиля: <green>{result}</green>
                    </div>
                }
                <img src={imageUrl} />
            </div>
            {!resultReceived?
                <div className={classes.buttons}>
                    <Button inlineStyles={{width: '62rem'}}>
                        Узнать ответ нейросети
                    </Button>
                    <Button
                        inlineStyles={{width: '62rem', background: '#C5C5C5', border: "1px solid #99AA9A"}}
                        onClick={navigate(-1)}
                    >
                        Отмена
                    </Button>
                </div>
            :
                <div className={classes.buttons}>
                    <Button inlineStyles={{width: '62rem'}}>
                        Верно
                    </Button>
                    <Button inlineStyles={{width: '62rem', background: '#C5C5C5', border: "1px solid #99AA9A"}}>
                        Неверно
                    </Button>
                </div>}
        </div>
    );
};

export default Main;