const Route={
    Home:'home',
    Login:'login',
    Registration:'registration',
    Teams:'teams',
    Gallery:'gallery',
    Contact:'contact',
    Activities:'activities'
};
const RoutePrefix='/ignite';
if(typeof module!=='undefined'&&module.exports)
    module.exports={Route,RoutePrefix};
if(typeof exports!=='undefined')exports.myVarible={Route,RoutePrefix};