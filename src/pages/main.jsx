import React, {useRef, useState} from 'react';
import classes from "./main.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../components/Button";
import loadingImg from "../assets/loading.png"

const Main = () => {
    const location = useLocation()
    const file = location.state.file
    const prediction = location.state.prediction
    const imageUrl = URL.createObjectURL(file)

    const navigate = useNavigate()

    let [result, setResult] = useState('')
    let [loading, setLoading] = useState(false)
    let [resultIsCorrect, setResultIsCorrect] = useState(true)

    let getResult = () => {
        setLoading(true)
        setTimeout(()=>{
            setResult(prediction)
            setLoading(false)
            return 1
        }, 500)
    }

    let sendCorrection = () => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            navigate('/success')
            return 1
        }, 500)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.imgBlock}>
                {result && !loading &&
                    <div className={classes.imgTag}>
                        Цвет автомобиля: <green>{result}</green>
                    </div>
                }
                {loading &&
                    <div className={classes.imgTag}>
                        <img src={loadingImg} alt={'Загрузка...'} className={classes.loadingImg}/>
                        Ожидание ответа от сервера...
                    </div>
                }
                <img src={imageUrl} alt={'Ваша картинка'}/>
            </div>
            {!result &&
                <div className={classes.buttons}>
                    <Button
                        inlineStyles={{width: '62rem', opacity: loading && '0.5'}}
                        onClick={getResult}
                    >
                        Узнать ответ нейросети
                    </Button>
                    <Button
                        inlineStyles={{width: '62rem', background: '#C5C5C5', border: "1px solid #99AA9A", opacity: loading && '0.5'}}
                        onClick={()=>navigate('/upload')}
                    >
                        Отмена
                    </Button>
                </div>
            }
            {result && resultIsCorrect &&
                <div className={classes.buttons}>
                    <Button
                        inlineStyles={{width: '62rem'}}
                        onClick={()=>navigate('/success')}
                    >
                        Верно
                    </Button>
                    <Button
                        inlineStyles={{width: '62rem', background: '#C5C5C5', border: "1px solid #99AA9A"}}
                        onClick={()=>setResultIsCorrect(false)}
                    >
                        Неверно
                    </Button>
                </div>
            }
            {result && !resultIsCorrect &&
                <div className={classes.buttons}>
                    <div className={classes.selectorHeader}>Пожалуйста, уточните настоящий цвет автомобиля:</div>
                    <select name={'colorSelector'} className={classes.selector}>
                        <option value={'black'}>Черный</option>
                        <option value={'white'}>Белый</option>
                        <option value={'blue'}>Синий</option>
                        <option value={'grey'}>Серый</option>
                        <option value={'green'}>Зеленый</option>
                        <option value={'silver'}>Серебристый</option>
                        <option value={'brown'}>Коричневый</option>
                        <option value={'red'}>Красный</option>
                        <option value={'yellow'}>Желтый</option>
                        <option value={'gold'}>Золотой</option>
                        <option value={'pink'}>Розовый</option>
                        <option value={'purple'}>Фиолетовый</option>
                        <option value={'beige'}>Бежевый</option>
                        <option value={'tan'}>Цвет загара</option>
                    </select>
                    <Button
                        inlineStyles={{width: '62rem'}}
                        onClick={sendCorrection}
                    >
                        Ок
                    </Button>
                    <Button
                        inlineStyles={{width: '62rem', background: '#C5C5C5', border: "1px solid #99AA9A"}}
                        onClick={()=>navigate('/upload')}
                    >
                        Отмена
                    </Button>
                </div>
            }
        </div>
    );
};

export default Main;