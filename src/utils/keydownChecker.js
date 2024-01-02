/*
  使用方式：
  keydownChecker(keySequences);

  關於 keydownChecker：
  這個函數 `keydownChecker` 是用於設定和監聽特定鍵盤序列的觸發，當指定的鍵盤序列被完整按下時，將執行相應的回呼函數。
  它適用於實現如秘密代碼、快捷操作等功能，當用戶按下特定的鍵盤組合時執行特定操作。

  ## 參數：
  - `keySequences`：一個物件，其屬性為欲監聽的鍵盤序列（字符串形式），每個屬性的值為當該序列被觸發時執行的回呼函數。
    例如：{
        'ABC': () => console.log('ABC sequence triggered!'),
        'XYZ': () => console.log('XYZ sequence triggered!')
    }

  ## 功能說明：
  - 當用戶按下定義在 `keySequences` 中的一組鍵盤序列時，對應的回呼函數將被調用。
  - 若用戶在輸入序列過程中按錯任何鍵，將重置該序列的輸入進度。
  - 函數會自動忽略來自輸入框（input）、文本域（textarea）或選擇框（select）的鍵盤事件，以避免影響表單等功能。
  - 此函數可同時監聽多個不同的鍵盤序列。

  ## 注意事項：
  - 確保每個鍵盤序列唯一，且對應的回呼函數正確無誤。
  - 該函數僅設置一次鍵盤監聽器，若需要更新監聽的序列或函數，需重新調用此函數。
*/

let keydownListener;

export const keydownChecker = (keySequences) => {
    let currentKeyIndexes = new Map();

    // 初始化每個序列的當前索引
    Object.keys(keySequences).forEach(sequence => {
        currentKeyIndexes.set(sequence, 0);
    });

    if (keydownListener) {
        document.removeEventListener('keydown', keydownListener);
    }

    keydownListener = (event) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return

        const pressedKeyCode = event.code;

        Object.keys(keySequences).forEach(sequence => {
            const expectedKeyCodeSequence = sequence.toUpperCase().split('').map(char => `Key${char}`);
            let currentKeyIndex = currentKeyIndexes.get(sequence);

            if (pressedKeyCode === expectedKeyCodeSequence[currentKeyIndex]) {
                currentKeyIndex++;
                if (currentKeyIndex === expectedKeyCodeSequence.length) {
                    keySequences[sequence](); // 執行對應的回呼函數
                    currentKeyIndex = 0;
                }
                currentKeyIndexes.set(sequence, currentKeyIndex);
            } else {
                currentKeyIndexes.set(sequence, 0);
            }
        });
    };

    document.addEventListener('keydown', keydownListener);
};


let specialKeyListener;

export const specialKeyChecker = (specialKeyActions) => {
    if (specialKeyListener) {
        document.removeEventListener('keydown', specialKeyListener);
    }

    specialKeyListener = (event) => {
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName))return

        const pressedKeyCode = event.code;

        // 檢查特殊按鍵是否被按下
        if (specialKeyActions.hasOwnProperty(pressedKeyCode)) {
            specialKeyActions[pressedKeyCode](); // 執行對應的回呼函數
        }
    };

    document.addEventListener('keydown', specialKeyListener);
};