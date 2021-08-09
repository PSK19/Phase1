function addCounter(){
    var getLaptops = parseFloat(sessionStorage.getItem("laptops"));
    var getPhones = parseFloat(sessionStorage.getItem("phones"));
    var getDesktops = parseFloat(sessionStorage.getItem("desktops"));
    var getMonitors = parseFloat(sessionStorage.getItem("monitors"));
    var total = getLaptops + getPhones + getDesktops + getMonitors;
    var totalString = String(total);
    (<HTMLInputElement>document.getElementById("cartSize")).innerHTML = totalString;
}

function checkStorage(){
    if(sessionStorage.getItem("laptops")==undefined){
        sessionStorage.setItem("laptops", "0");
    }
    if(sessionStorage.getItem("phones")==undefined){
        sessionStorage.setItem("phones", "0");
    }
    if(sessionStorage.getItem("desktops")==undefined){
        sessionStorage.setItem("desktops", "0");
    }
    if(sessionStorage.getItem("monitors")==undefined){
        sessionStorage.setItem("monitors", "0");
    }
}

function addLaptop(){
    checkStorage()
    let quantity = (<HTMLInputElement>document.getElementById("laptopAddNum")).value;
    var getStorage = sessionStorage.getItem("laptops");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["laptops"] = newValueString;
    addCounter();
}

function addPhone(){
    checkStorage()
    let quantity = (<HTMLInputElement>document.getElementById("phoneAddNum")).value;
    var getStorage = sessionStorage.getItem("phones");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["phones"] = newValueString;
    addCounter();
}

function addDesktop(){
    checkStorage()
    let quantity = (<HTMLInputElement>document.getElementById("desktopAddNum")).value;
    var getStorage = sessionStorage.getItem("desktops");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["desktops"] = newValueString;
    addCounter();
}

function addMonitor(){
    checkStorage()
    let quantity = (<HTMLInputElement>document.getElementById("monitorAddNum")).value;
    var getStorage = sessionStorage.getItem("monitors");
    var oldValue = parseFloat(getStorage);
    var newValue = parseFloat(quantity) + oldValue;
    var newValueString = newValue + '';
    sessionStorage["monitors"] = newValueString;
    addCounter();
}

function remLaptop(){
    checkStorage()
    var quantity = (<HTMLInputElement>document.getElementById("laptopRemNum")).value;
    var getStorage = sessionStorage.getItem("laptops");
    var oldValue = parseFloat(getStorage);
    if(parseFloat(quantity) > oldValue){
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["laptops"] = newValueString;
    addCounter();
}

function remPhone(){
    checkStorage()
    var quantity = (<HTMLInputElement>document.getElementById("phoneRemNum")).value;
    var getStorage = sessionStorage.getItem("phones");
    var oldValue = parseFloat(getStorage);
    if(parseFloat(quantity) > oldValue){
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["phones"] = newValueString;
    addCounter();
}

function remDesktop(){
    checkStorage()
    var quantity = (<HTMLInputElement>document.getElementById("desktopRemNum")).value;
    var getStorage = sessionStorage.getItem("desktops");
    var oldValue = parseFloat(getStorage);
    if(parseFloat(quantity) > oldValue){
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["desktops"] = newValueString;
    addCounter();
}

function remMonitor(){
    checkStorage()
    var quantity = (<HTMLInputElement>document.getElementById("monitorRemNum")).value;
    var getStorage = sessionStorage.getItem("monitors");
    var oldValue = parseFloat(getStorage);
    if(parseFloat(quantity) > oldValue){
        quantity = String(oldValue);
    }
    var newValue = oldValue - parseFloat(quantity);
    var newValueString = newValue + '';
    sessionStorage["monitors"] = newValueString;
    addCounter();
}