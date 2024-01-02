// import { useCallback } from 'react';
// import html2canvas from 'html2canvas';
//
// const useDownload = (id = 'download',ref = null) => {
//     const downloadById = useCallback(() => {
//         let targetElement;
//
//         // 若有傳入 ref，則使用 ref，否則使用 id 尋找元素
//         if (ref && ref.current) {
//             targetElement = ref.current;
//         } else if (id) {
//             targetElement = document.getElementById(id);
//         }
//
//         // 若元素不存在，則返回
//         if (!targetElement) {
//             console.error('Target element not found!');
//             return;
//         }
//
//         html2canvas(targetElement,{
//             backgroundColor: null, // 透明背景
//         }).then((canvas) => {
//             const image = canvas.toDataURL("image/png");
//             const link = document.createElement("a");
//             link.download = `${id}.png`;
//             link.href = image;
//             link.click();
//         });
//     }, [ref, id]);
//
//     return downloadById;
// };
//
// export default useDownload;
