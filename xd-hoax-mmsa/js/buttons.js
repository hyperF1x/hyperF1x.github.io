function closeBeacon() {        
    document.getElementById('beacon').className ='closeDim';    
    document.getElementById('beacon').style.display = 'none';
}

function openBeacon() {
    document.getElementById('beacon').style.display = 'block';
    document.getElementById('beacon').className ='openDim';
}

function openMenu() {
    document.getElementById('home').className ='openMenu';
}
function closeMenu() {
    document.getElementById('home').className ='closeMenu';
}