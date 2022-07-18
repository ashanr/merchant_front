import login from "@/store/auth/login";

const commonMixin = {
    methods: {
        hasPermission(permission){
            if(login.getters.loggedIn() == true){
                if(permission){
                    var base64Url = login.state.access_token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    let payload = JSON.parse(jsonPayload);
                    let permissions = payload.scopes;

                    if (permissions.indexOf(permission) != -1) {
                        return true;
                    } else {
                        return false;
                    }

                }else{
                    return false;
                }
            }else{
                return false;
            }
        },
        hasFromPermission(permission){
            if(login.getters.loggedIn() == true){
                if(permission){
                    var base64Url = login.state.access_token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(''));
                    let payload = JSON.parse(jsonPayload);
                    let permissions = payload.scopes;

                    if (this.getArraysIntersection(permissions, permission).length != 0) {
                        return true;
                    } else {
                        return false;
                    }

                }else{
                    return false;
                }
            }else{
                return false;
            }
        },
        getArraysIntersection(a1,a2){
            return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
        },
        goHistoryBack(){
            window.history.back();
        }
    }
}
export default commonMixin

