import React from 'react';
import download from '../../../assets/images/download.svg';
import cls from './TapeItem.module.css';






const TapeItem = () => {


    return (
        <div className = { cls.root }>

            <div className = {cls.titleTape}>
                <span> Статья 2 </span>
            </div>

            <div className = {cls.textTape}>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </span>
            </div>

            <div className = { cls.imageTape }>
                <img src={download} alt=""/>
                <span style = {{ marginLeft: "2%" }}> Lorem input.txt </span>
            </div>


        </div>
    )
}

export default TapeItem;