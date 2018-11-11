const config = {
    production:{
        USER: 'deba@yeme.com.ng',
        PASSWORD: process.env.PASSWORD
    },
    default:{
        USER: 'content',
        PASSWORD: 'content'
    }

};

exports.get = function get (env){
    return config[env] || config.default
}

