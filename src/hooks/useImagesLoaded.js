import { useState, useEffect } from 'react';
import {sourcePath} from "../utils/path";

/*
  使用方式：
  const allLoaded = useImagesLoaded(images);
  useEffect(()=>{if(allLoaded){window.parent?.hideBlock&&window.parent.hideBlock()}},[allLoaded])

  關於 useImagesLoaded：
  這個 React Hook `useImagesLoaded` 用於檢測一組圖片是否全部加載完成。
  它接受一個圖片來源的物件作為參數，當所有圖片都加載成功時，返回一個布爾值標識加載完成。

  ## 參數：
  - `images`：物件，鍵是自定義的圖片識別名稱，值是圖片的來源 URL。

  ## 返回值：
  - 返回一個布爾值 `allLoaded`，當所有圖片都加載完成時為 `true`，否則為 `false`。

  此 Hook 通過創建一個新的 Image 實例並監聽其 onload 和 onerror 事件來檢測圖片是否加載。當所有圖片都觸發了 onload 事件時，認為加載完成。
*/

const useImagesLoaded = (images) => {
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        if (!images || Object.keys(images).length === 0) {
            setAllLoaded(true);
            return;
        }

        const loadImage = (src, key) => { // 加入 key 參數以識別圖片
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = () => reject(new Error(`Failed to load image: ${key}`)); // 更詳細的錯誤信息
                img.src = src.replace('./', sourcePath);
            });
        };

        const imagePromises = Object.entries(images).map(([key, src]) =>
            loadImage(src, key).catch(error => {
                console.error(error.message); // 輸出具體的錯誤信息
                return error; // 仍然返回錯誤，以便 Promise.all 可以正確處理
            })
        );

        Promise.all(imagePromises)
            .then(() => setAllLoaded(true))
            .catch(error => console.error("Error loading one or more images", error));
    }, [images]);

    return allLoaded;
};

export default useImagesLoaded;
