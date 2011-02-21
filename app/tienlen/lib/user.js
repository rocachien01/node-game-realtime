function User(params) {
    var self = this;
    this.user = Array();
    if(params){        
        this.id = params.id; /* ma cua nguoi choi*/
        this.account = params.account; /* account cua nguoi choi*/
        this.password = params.password; /* mat khau cua tai khoan*/
        this.name = params.name; /* Ten thuc cua nguoi choii*/
        this.birthday = params.birthday; /*  ngay sinh cua nguoi choi*/
        this.lastlogin = params.lastlogin; /* lan dang nhap cuoi*/
    }
}

exports.User = User;

User.prototype.set=function(user){
    this.id = user.user_id;
    this.account = user.user_account;
    this.password = user.user_password;
    this.name = user.user_name;
    this.birthday = user.user_birthday;
    this.lastlogin = user.user_lastlogin;
    this.feel();
};
User.prototype.get=function(id){
    if(!this.user) return false;
    return this.user[id];
};
User.prototype.feel=function(){
    this.user[id] = {
        id:this.id,
        account:this.account,
        password:this.password,
        name:this.name,
        birthday:this.birthday,
        lastlogin:this.lastlogin
    };        
};
