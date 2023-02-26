import { Card } from '@chakra-ui/react';
import React from 'react';
import { SetStateAction, useState } from 'react';



// 『寫出聊天欄位丟入照片時，可以有title與文字結合圖片的編輯框在chatBox輸入
// 欄位中顯示這樣的UI



// export default function InputPhoto() {

//     const [content, setContent] = useState('');

//     const handleInputChange = (event: { target: { innerHTML: SetStateAction<string>; }; }) => {
//         setContent(event.target.innerHTML);
//     };

//     const handleInsertImage = (event: { target: { files: Blob[]; }; }) => {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             const img = document.createElement('img');
//             img.src = e.target.result;
//             const range = window.getSelection().getRangeAt(0);
//             range.insertNode(img);
//         };
//         reader.readAsDataURL(event.target.files[0]);
//     };
//     return (
//        <Card>
//         {handleInsertImage}
//        </Card>
//     );
// }


