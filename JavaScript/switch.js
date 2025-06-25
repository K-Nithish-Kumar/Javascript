// switch
let a = 2+2;
switch(4){
    case 4:
        console.log('hello');
        break;
}

//changin from switch to if
let browser = 'sa';
if (browser == 'edge'){
    console.log('you got the edge');
}
else if(browser == 'chrome'||browser=='firefox'||browser=='safari') {
    console.log('okay we support this');

}
else{
    console.log('its okay');
}

// change from switch
let q = +prompt('q?','')
switch(q){
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
    default:
        console.log('error!');
}