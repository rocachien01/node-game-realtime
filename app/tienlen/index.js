/**
* Include module
*/
var exp = require('./lib/bobai');
var Bobai = exp.Bobai;
var bobai = new Bobai();

function Tienlen(params){
    var self = this;
    if(params){
    }else{
        this.van_bai = new Array();
        this.nuoc_di = new Array();
        this.bo_bai = bobai.create();;
        this.user = new Array();
        this.user_start = 0;
        this.user_play = 0;
        this.van_moi = true;
        this.start = false;
    }
}

exports.Tienlen = Tienlen;

Tienlen.prototype.van_dau = function(){
        for(var i=0; i<4; i++){
            if(this.user[i] && this.user[i].isstart)
                return i;
        }
        this.user_start = Math.floor(Math.random()*4);
        return this.user_start;
    }
Tienlen.prototype.chia_bai = function(){
        var bb = this.bo_bai;
        var nc = this.user_start;
        
        var sb = 52;
        var rd = 0;
        for(var i = 0; i< 52; i++){
            nc++;
            if(nc==4)  nc =0;
            
            rd = Math.floor(Math.random()*sb);
            sb--;
            var nguoi_choi = this.user[nc];
            var quanbai = new Array();
            //neu nhu chua co quan bai thi tao moi
            if(nguoi_choi && nguoi_choi.quanbai)
                quanbai = nguoi_choi.quanbai;
            //cat quan bai vao mang
            quanbai.push(bb[rd]);            
            this.user[nc] ={quanbai:quanbai};
            bb.splice(rd,1);
        }
        return true;
    }
Tienlen.prototype.xep_bai = function(){
        for(var i=0; i<4; i++){
            var quanbai = this.user[i].quanbai;
            quanbai.sort(function (a, b){return (a.strength - b.strength);} );
            this.user[i].quanbai = quanbai;
        }        
    }
Tienlen.prototype.them_cuoc = function(){
        
    };
Tienlen.prototype.them_nua_cuoc = function(){
        
    };
Tienlen.prototype.mat_luot = function(){
        return false;
    };
Tienlen.prototype.bo_luot = function(){
        return true;
    };
Tienlen.prototype.kiemtra_tontai_labai = function(la_bai){
        var quanbai = this.user[this.user_play].quanbai;
        for(var i=0; i<13; i++){
            if(quanbai[i].name == la_bai) {
                return true; 
                break;
            }
        }
        return false;
    };
Tienlen.prototype.kiemtra_tontai_doi = function(so_bai){
        var quanbai = this.user[this.user_play].quanbai;
        var qmanh = 0;
        var num = 0;
        
        for(var i=0; i<13; i++){
            var la_bai = so_bai + "B";
            if(quanbai[i].name == la_bai) {
                qmanh = 1;
                num++;
            }
            var la_bai = so_bai + "N";
            if(quanbai[i].name == la_bai) {
                qmanh = 2;
                num++;
            }
            var la_bai = so_bai + "R";
            if(quanbai[i].name == la_bai) {
                qmanh = 3;
                num++;
            }
            var la_bai = so_bai + "C";
            if(quanbai[i].name == la_bai) {
                qmanh = 4;
                num++;
            }
        }
        //tra lai quan co do manh cao nhat: 1,2,3,4 ~ B,N,R,C
        if(num > 1)
            return qmanh;
        else
            return false;
    };
Tienlen.prototype.kiemtra_tontai_ba = function(so_bai){
        var quanbai = this.user[this.user_play].quanbai;
        var qmanh = 0;
        var num = 0;
        
        for(var i=0; i<13; i++){
            var la_bai = so_bai + "B";
            if(quanbai[i].name == la_bai) {
                qmanh = 1;
                num++;
            }
            var la_bai = so_bai + "N";
            if(quanbai[i].name == la_bai) {
                qmanh = 2;
                num++;
            }
            var la_bai = so_bai + "R";
            if(quanbai[i].name == la_bai) {
                qmanh = 3;
                num++;
            }
            var la_bai = so_bai + "C";
            if(quanbai[i].name == la_bai) {
                qmanh = 4;
                num++;
            }
        }
        //tra lai quan co do manh cao nhat: 1,2,3,4 ~ B,N,R,C
        if(num > 2)
            return qmanh;
        else
            return false;
    };
Tienlen.prototype.kiemtra_tontai_tuquy = function(so_bai){
        var quanbai = this.user[this.user_play].quanbai;
        var qmanh = 0;
        var num = 0;
        
        for(var i=0; i<13; i++){
            var la_bai = so_bai + "B";
            if(quanbai[i].name == la_bai) {
                qmanh = 1;
                num++;
            }
            var la_bai = so_bai + "N";
            if(quanbai[i].name == la_bai) {
                qmanh = 2;
                num++;
            }
            var la_bai = so_bai + "R";
            if(quanbai[i].name == la_bai) {
                qmanh = 3;
                num++;
            }
            var la_bai = so_bai + "C";
            if(quanbai[i].name == la_bai) {
                qmanh = 4;
                num++;
            }
        }
        if(num > 3)
            return true;
        else
            return false;
    };
Tienlen.prototype.kiemtra_antrang = function(){        
        for(var i=0; i<4; i++){            
            var oanh_truoc = this.user_start;
            oanh_truoc += i;
            if(oanh_truoc >= 4) oanh_truoc -= 4;
                this.user_play = oanh_truoc;
            //Neu la van dau tien
            if(this.van_moi){                
                //Tu quy 3
                if(this.kiemtra_tuquy3()){
                    console.log('======== Van bai dau tien co tu quy 3 ====================================================');
                    console.log(this.user[this.user_play].quanbai);
                    return 1;
                }
                //3 doi thong co 3B
                if(this.kiemtra_3doithong_3B()){
                    console.log('======== Van bai dau tien co 3 doi thong co 3B ====================================================');
                    console.log(this.user[this.user_play].quanbai);
                    return 2;
                }
            }else{
                //Sanh rong
                if(this.kiemtra_sanh_rong()){
                    console.log('======== Co sanh rong ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 3;
                }
                //6 doi ma khong can thong
                if(this.kiemtra_6doi()){
                    console.log('======== Co 6 doi khong thong ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 4;
                }
                //5 doi thong
                if(this.kiemtra_5doithong()){
                    console.log('======== Co 5 doi thong ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 5;
                }
                //4 sam (4 bo 3)
                if(this.kiemtra_4sam()){
                    console.log('======== Co 4 sam ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 6;
                }
                //2 tu quy
                if(this.kiemtra_2tuquy()){
                    console.log('======== Co 2 tu quy ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 7;
                }
                //Tu quy heo
                if(this.kiemtra_tontai_tuquy('2')){
                    console.log('======== Co tu quy heo ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 8;
                }
                //12/13 la cung mau
                if(this.kiemtra_12la_cung_mau()){
                    console.log('======== Co 12 la cung mau ====================================================');
                    //console.log(this.user[this.user_play].quanbai);
                    return 9;
                }
            }            
        }
        return false;
    };
Tienlen.prototype.kiemtra_tuquy3 = function(){
        var quanbai = this.user[this.user_play].quanbai;
        //
        if(quanbai[0].name != '3B') return false;
        if(quanbai[1].name != '3N') return false;
        if(quanbai[2].name != '3R') return false;
        if(quanbai[3].name != '3C') return false;
        return true;
    };
Tienlen.prototype.kiemtra_3doithong_3B = function(){
        var quanbai = this.user[this.user_play].quanbai;
        //
        if(!(this.kiemtra_tontai_labai('3B') && (this.kiemtra_tontai_labai('3N') || this.kiemtra_tontai_labai('3R') || this.kiemtra_tontai_labai('3C')))) return false;
        if(!(this.kiemtra_tontai_labai('4B') && (this.kiemtra_tontai_labai('4N') || this.kiemtra_tontai_labai('4R') || this.kiemtra_tontai_labai('4C')))) return false;
        if(!(this.kiemtra_tontai_labai('5B') && (this.kiemtra_tontai_labai('5N') || this.kiemtra_tontai_labai('5R') || this.kiemtra_tontai_labai('5C')))) return false;
        return true;
    };
Tienlen.prototype.kiemtra_sanh_rong = function(){
        var quanbai = this.user[this.user_play].quanbai;
        //
        if(!(this.kiemtra_tontai_labai('3B') || this.kiemtra_tontai_labai('3N') || this.kiemtra_tontai_labai('3R') || this.kiemtra_tontai_labai('3C'))) return false;
        if(!(this.kiemtra_tontai_labai('4B') || this.kiemtra_tontai_labai('4N') || this.kiemtra_tontai_labai('4R') || this.kiemtra_tontai_labai('4C'))) return false;
        if(!(this.kiemtra_tontai_labai('5B') || this.kiemtra_tontai_labai('5N') || this.kiemtra_tontai_labai('5R') || this.kiemtra_tontai_labai('5C'))) return false;
        if(!(this.kiemtra_tontai_labai('6B') || this.kiemtra_tontai_labai('6N') || this.kiemtra_tontai_labai('6R') || this.kiemtra_tontai_labai('6C'))) return false;
        if(!(this.kiemtra_tontai_labai('7B') || this.kiemtra_tontai_labai('7N') || this.kiemtra_tontai_labai('7R') || this.kiemtra_tontai_labai('7C'))) return false;
        if(!(this.kiemtra_tontai_labai('8B') || this.kiemtra_tontai_labai('8N') || this.kiemtra_tontai_labai('8R') || this.kiemtra_tontai_labai('8C'))) return false;
        if(!(this.kiemtra_tontai_labai('9B') || this.kiemtra_tontai_labai('9N') || this.kiemtra_tontai_labai('9R') || this.kiemtra_tontai_labai('9C'))) return false;
        if(!(this.kiemtra_tontai_labai('10B') || this.kiemtra_tontai_labai('10N') || this.kiemtra_tontai_labai('10R') || this.kiemtra_tontai_labai('10C'))) return false;
        if(!(this.kiemtra_tontai_labai('JB') || this.kiemtra_tontai_labai('JN') || this.kiemtra_tontai_labai('JR') || this.kiemtra_tontai_labai('JC'))) return false;
        if(!(this.kiemtra_tontai_labai('QB') || this.kiemtra_tontai_labai('QN') || this.kiemtra_tontai_labai('QR') || this.kiemtra_tontai_labai('QC'))) return false;
        if(!(this.kiemtra_tontai_labai('KB') || this.kiemtra_tontai_labai('KN') || this.kiemtra_tontai_labai('KR') || this.kiemtra_tontai_labai('KC'))) return false;
        if(!(this.kiemtra_tontai_labai('AB') || this.kiemtra_tontai_labai('AN') || this.kiemtra_tontai_labai('AR') || this.kiemtra_tontai_labai('AC'))) return false;
        return true;
    };
Tienlen.prototype.kiemtra_6doi = function(){
        var num = 0;
        //
        if(this.kiemtra_tontai_doi('3')) num++;
        if(this.kiemtra_tontai_doi('4')) num++;
        if(this.kiemtra_tontai_doi('5')) num++;
        if(this.kiemtra_tontai_doi('6')) num++;
        if(this.kiemtra_tontai_doi('7')) num++;
        if(this.kiemtra_tontai_doi('8')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('9')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('10')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('J')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('Q')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('K')) num++; if(num >= 6) return true;
        if(this.kiemtra_tontai_doi('A')) num++;  if(num >= 6) return true;
        return false;
    };
Tienlen.prototype.kiemtra_5doithong = function(){
        if(this.kiemtra_tontai_doi('3') && this.kiemtra_tontai_doi('4') && this.kiemtra_tontai_doi('5') && this.kiemtra_tontai_doi('6') && this.kiemtra_tontai_doi('7')) return true;
        if(this.kiemtra_tontai_doi('4') && this.kiemtra_tontai_doi('5') && this.kiemtra_tontai_doi('6') && this.kiemtra_tontai_doi('7') && this.kiemtra_tontai_doi('8')) return true;
        if(this.kiemtra_tontai_doi('5') && this.kiemtra_tontai_doi('6') && this.kiemtra_tontai_doi('7') && this.kiemtra_tontai_doi('8') && this.kiemtra_tontai_doi('9')) return true;
        if(this.kiemtra_tontai_doi('6') && this.kiemtra_tontai_doi('7') && this.kiemtra_tontai_doi('8') && this.kiemtra_tontai_doi('9') && this.kiemtra_tontai_doi('10')) return true;
        if(this.kiemtra_tontai_doi('7') && this.kiemtra_tontai_doi('8') && this.kiemtra_tontai_doi('9') && this.kiemtra_tontai_doi('10') && this.kiemtra_tontai_doi('J')) return true;
        if(this.kiemtra_tontai_doi('8') && this.kiemtra_tontai_doi('9') && this.kiemtra_tontai_doi('10') && this.kiemtra_tontai_doi('J') && this.kiemtra_tontai_doi('Q')) return true;
        if(this.kiemtra_tontai_doi('9') && this.kiemtra_tontai_doi('10') && this.kiemtra_tontai_doi('J') && this.kiemtra_tontai_doi('Q') && this.kiemtra_tontai_doi('K')) return true;
        if(this.kiemtra_tontai_doi('10') && this.kiemtra_tontai_doi('J') && this.kiemtra_tontai_doi('Q') && this.kiemtra_tontai_doi('K') && this.kiemtra_tontai_doi('A')) return true;
        return false;
    };
Tienlen.prototype.kiemtra_4sam = function(){
        var num = 0;
        if(this.kiemtra_tontai_ba('3')) num++;
        if(this.kiemtra_tontai_ba('4')) num++;
        if(this.kiemtra_tontai_ba('5')) num++;
        if(this.kiemtra_tontai_ba('6')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('7')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('8')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('9')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('10')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('J')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('Q')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('K')) num++; if(num == 4) return true;
        if(this.kiemtra_tontai_ba('A')) num++; if(num == 4) return true;
        return false;
    };
Tienlen.prototype.kiemtra_2tuquy = function(){
        var num = 0;
        //
        if(this.kiemtra_tontai_tuquy('3')) num++;
        if(this.kiemtra_tontai_tuquy('4')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('5')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('6')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('7')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('8')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('9')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('10')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('J')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('Q')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('K')) num++; if(num == 2) return true;
        if(this.kiemtra_tontai_tuquy('A')) num++;  if(num == 2) return true;
        return false;
    };
Tienlen.prototype.kiemtra_12la_cung_mau = function(){
        var quanbai = this.user[this.user_play].quanbai;
        var den = 0;
        var qdo = 0;
        //
        if(!(this.kiemtra_tontai_labai('3B') || this.kiemtra_tontai_labai('3N'))) den++;
        if(!(this.kiemtra_tontai_labai('4B') || this.kiemtra_tontai_labai('4N'))) den++;
        if(!(this.kiemtra_tontai_labai('5B') || this.kiemtra_tontai_labai('5N'))) den++;
        if(!(this.kiemtra_tontai_labai('6B') || this.kiemtra_tontai_labai('6N'))) den++;
        if(!(this.kiemtra_tontai_labai('7B') || this.kiemtra_tontai_labai('7N'))) den++;
        if(!(this.kiemtra_tontai_labai('8B') || this.kiemtra_tontai_labai('8N'))) den++;
        if(!(this.kiemtra_tontai_labai('9B') || this.kiemtra_tontai_labai('9N'))) den++;
        if(!(this.kiemtra_tontai_labai('10B') || this.kiemtra_tontai_labai('10N'))) den++;
        if(!(this.kiemtra_tontai_labai('JB') || this.kiemtra_tontai_labai('JN'))) den++;
        if(!(this.kiemtra_tontai_labai('QB') || this.kiemtra_tontai_labai('QN'))) den++;
        if(!(this.kiemtra_tontai_labai('KB') || this.kiemtra_tontai_labai('KN'))) den++;
        if(!(this.kiemtra_tontai_labai('AB') || this.kiemtra_tontai_labai('AN'))) den++;if(den==12) return true;
        if(!(this.kiemtra_tontai_labai('2B') || this.kiemtra_tontai_labai('2N'))) den++;if(den==12) return true;
            
        if(!(this.kiemtra_tontai_labai('3R') || this.kiemtra_tontai_labai('3C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('4R') || this.kiemtra_tontai_labai('4C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('5R') || this.kiemtra_tontai_labai('5C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('6R') || this.kiemtra_tontai_labai('6C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('7R') || this.kiemtra_tontai_labai('7C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('8R') || this.kiemtra_tontai_labai('8C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('9R') || this.kiemtra_tontai_labai('9C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('10R') || this.kiemtra_tontai_labai('10C'))) qdo++;
        if(!(this.kiemtra_tontai_labai('JR') || this.kiemtra_tontai_labai('JC'))) qdo++;
        if(!(this.kiemtra_tontai_labai('QR') || this.kiemtra_tontai_labai('QC'))) qdo++;
        if(!(this.kiemtra_tontai_labai('KR') || this.kiemtra_tontai_labai('KC'))) qdo++;
        if(!(this.kiemtra_tontai_labai('AR') || this.kiemtra_tontai_labai('AC'))) qdo++;if(qdo==12) return true;
        if(!(this.kiemtra_tontai_labai('2R') || this.kiemtra_tontai_labai('2C'))) qdo++;if(qdo==12) return true;
        return false;
    };
Tienlen.prototype.danh_bai = function(stt){
        
    };
Tienlen.prototype.kiemtra_thoiheo_den = function(){
        return false;
    };
Tienlen.prototype.kiemtra_thoiheo_do = function(){
        
    };
Tienlen.prototype.thoi_hang = function(){
        
    };
Tienlen.prototype.thoi_tuquy = function(){
        
    };
Tienlen.prototype.thoi_heo_do = function(){
        
    };
Tienlen.prototype.thoi_heo_den = function(){
        
    };
Tienlen.prototype.chat_rac = function(){
    };
Tienlen.prototype.chat_doi = function(){
        
    };
Tienlen.prototype.chat_sanh = function(){
        
    };
Tienlen.prototype.chat_hang = function(){
        
    };
Tienlen.prototype.chat_tuquy = function(){
        
    };
Tienlen.prototype.chat_heo_do = function(){
        
    };
Tienlen.prototype.chat_heo_den = function(){
        console.log('dsfsdf sdfdsf');
    };
Tienlen.prototype.chat_doiheo_do = function(){
        
    };
Tienlen.prototype.chat_doiheo_den = function(){
        
    };
Tienlen.prototype.chat_doiheo_dendo = function(){
        
    };

