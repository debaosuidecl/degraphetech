const config = {
    production:{
        USER: 'deba@yeme.com.ng',
        PASSWORD: process.env.PASSWORD
    },
};

exports.get = function get (env){
    return config[env] /*|| config.default*/
}