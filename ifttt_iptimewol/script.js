function result(){
    let ddns_url = document.getElementById('ddns_url').value;
    let iptime_id = document.getElementById('iptime_id').value;
    let iptime_pw = document.getElementById('iptime_pw').value;
    let mac_address = document.getElementById('mac_address').value;    

    var url = 'http://'+ddns_url+'/cgi-bin/wol_apply.cgi?act=wakeup&mac='+mac_address;
    var auth = 'Authorization : Basic '+ btoa(iptime_id+":"+iptime_pw);

    let result_url = document.getElementById('result_url');
    let result_auth = document.getElementById('result_auth');
    result_url.innerText = url;
    result_auth.innerText = auth;
}