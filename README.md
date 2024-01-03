# TailwindTranslator

[Demo](https://tailwind-translator.mawer.cc/)

### 資料來源
在[這個網頁](https://flowbite.com/tools/tailwind-cheat-sheet/)中抓取基本的 Tailwind 資料：
```javascript
let data = {};
document.querySelectorAll(".rounded-xl").forEach(cardEl => {
    const h2 = cardEl.querySelector("h2").innerText;
    const h3Data = [];

    cardEl.querySelectorAll("h3").forEach(h3El => {
        const tableData = [];
        let parentSibling = h3El.parentElement.nextElementSibling;
        
        let tableEl = parentSibling ? parentSibling.querySelector("table") : null;
        
        if (tableEl) {
            tableEl.querySelectorAll("tr").forEach(trEl => {
                const tds = trEl.querySelectorAll("td");
                if (tds.length > 2) {
                    if(tds[0].innerText.includes(".")||tds[0].innerText.includes(":")){
                        tableData.push({ class: tds[0].innerText, properties: tds[1].innerText });
                    }else if(tds[1].innerText.includes(".")){
                        tableData.push({ class: tds[1].innerText, properties: tds[2].innerText });
                    }
                }
            });
        }

        if (tableData.length > 0) {
            h3Data.push({ title: h3El.innerText, classList: tableData });
        }
    });

    if (h3Data.length > 0) {
        data[h2] = h3Data;
    }
});

console.log(data);
```