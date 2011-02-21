var app = require('./app/tienlen');
var Tienlen = app.Tienlen;
var tienlen = new Tienlen();
//
for(var i=0; i<5000; i++){
    var tienlen = new Tienlen();
    tienlen.van_dau();
    //console.log(user);
    //chia bai
    tienlen.chia_bai();
    //xep bai    
    tienlen.xep_bai();
    //kiem tra an trang bang
    tienlen.van_moi = false;
    tienlen.kiemtra_antrang();
    //console.log(tienlen.user_start);    
    //danh bai thoi
    tienlen.danh_bai(tienlen.user_start);
    //tim nguoi duoc danh dau tien    
}
