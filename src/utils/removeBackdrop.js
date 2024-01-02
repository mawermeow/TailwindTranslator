export const removeBackdrop=()=>{
    const backdrop = document.querySelector('#backdrop')
    if(backdrop){
        backdrop.style.transition = 'opacity 0.5s'
        backdrop.style.opacity = '0';
        setTimeout(() => {
            backdrop.remove();
        }, 500);
    }
}