export const downloadFile=(fileName,fileUrl)=>{
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export const copyText=(text,callback=()=>{})=>{
    navigator.clipboard.writeText(text).then(()=>callback())
}