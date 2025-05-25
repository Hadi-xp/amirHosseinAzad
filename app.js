// this fuction checks the users device and redirect it to mobile or desktop view page
function redirect(){
    // getting user browser data and device
    const userData = navigator.userAgent;
    if(userData.includes('Android' || 'Iphone')){
        window.location.href = './Mobile-view/Mobile.html'
    }else if(userData.includes('Windows')){
        window.location.href = './Desktop-view/Desktop.html'
    }
}
// event listeneter on load page
window.addEventListener('load',redirect);