function redirect(){
    const userData = navigator.userAgent;
    if(userData.includes('Android' || 'Iphone')){
        window.location.href = './Mobile-view/Mobile.html'
    }else if(userData.includes('Windows')){
        window.location.href = './Desktop-view/Desktop.html'
    }
}
window.addEventListener('load',redirect);