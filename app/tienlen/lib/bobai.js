var CF = require('./../config/bobai');
function Bobai(params) {
    var self = this;
    this.bobai = Array();
    if(params){        
        this.id = params.id; /* ma cua la bai*/
        this.name = params.name; /* ten hoac ky hieu*/
        this.image = params.image; /* hinh anh cua la bai*/
        this.sound = params.sound; /* am thanh cua la bai*/
        this.priority = params.priority; /*  do uu tien*/
        this.strength = params.strength; /* do manh*/
    }
}

exports.Bobai = Bobai;

Bobai.prototype.set=function(id){
    var bobai = CF.config(id+1);
    if(!bobai) return false;
    this.id = bobai.bobai_id;
    this.name = bobai.bobai_name;
    this.image = bobai.bobai_image;
    this.sound = bobai.bobai_sound;
    this.priority = bobai.bobai_priority;
    this.strength = bobai.bobai_strength;
    this.feel(id);
};
Bobai.prototype.get=function(id){
    if(!this.bobai) return false;
    return this.bobai[id];
};
Bobai.prototype.feel=function(id){
    this.bobai[id] = {
        id:this.id,
        name:this.name,
        image:this.image,
        sound:this.sound,
        priority:this.priority,
        strength:this.strength
    };        
};
Bobai.prototype.create=function(){
    for(var i=0; i< 52; i++){
        this.set(i);
    }            
    return this.bobai;
};
