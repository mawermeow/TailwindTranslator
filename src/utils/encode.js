// 將字符串編碼為 Base64
export const encodeToBase64=(str)=> {
    try {
        let encoded = window.btoa(unescape(encodeURIComponent(str)));
        return encoded;
    } catch (e) {
        console.error('Failed to encode to Base64:', e);
        return null;
    }
}

// 將 Base64 解碼為字符串
export const decodeFromBase64=(encodedStr)=>{
    try {
        let decoded = decodeURIComponent(escape(window.atob(encodedStr)));
        return decoded;
    } catch (e) {
        console.error('Failed to decode from Base64:', e);
        return null;
    }
}

// 使用範例
// let original = "測試Base64";
// let encoded = encodeToBase64(original);
// console.log("Encoded:", encoded);
//
// let decoded = decodeFromBase64(encoded);
// console.log("Decoded:", decoded);  // 輸出應該與 original 一致