import React, {useEffect, useState} from 'react';
import classes from "./upload.module.css"
import image from '../assets/image.png'
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
    };

    useEffect(()=>{
        if (selectedFile)
            navigate('../main', {state:{file:selectedFile}})
    }, [selectedFile])

    return (
        <div className={classes.wrapper}>
            <div onDragOver={handleDragOver} onDrop={handleDrop} className={classes.dropBox}>
                <img src={image}  alt='image' className={classes.img}/>
                <p className={classes.p}>Переместите файлы сюда или добавьте их вручную</p>
                <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                <Button onClick={() => document.querySelector('input[type="file"]').click()}>
                    Выбрать файл
                </Button>
            </div>
            <div className={classes.pray}>
                <medium>*Важно!</medium> Добавляйте, пожалуйста, <medium>только</medium> фотографии автомобилей.<br />
                Перед отправкой данных на обучение они проверяются вручную.<br />
                <br />
                <extraLight>Спасибо, что пользуетесь нашим сервисом =)</extraLight>
            </div>
        </div>
    );
};

export default Upload;