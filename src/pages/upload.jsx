import React, {useEffect, useState} from 'react';
import classes from "./upload.module.css"
import image from '../assets/image.png'
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate()

    const uploadImage = async (file) => {
        if (!(file instanceof Blob) || !file.type.startsWith('image/')) {
            console.error('Неверный формат файла или файл не является изображением.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('image', file, 'image');

            const response = await fetch('http://localhost:5001/uploadImage', {
                method: 'POST',
                body: formData,
            });

            const result = await response.text();
            console.log(result); // Результат загрузки изображения
            return result
        } catch (error) {
            console.error('Ошибка при отправке файла:', error);
        }
    }

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
        const f = async () => {
            const result = await uploadImage(selectedFile)
            navigate('../main', {state:{file:selectedFile, prediction: JSON.parse(result).prediction}})
        }

        if (selectedFile)
            f()
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