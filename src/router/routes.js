function load(component) {
    return resolve => require([`../views/${component}`], resolve);
}

const routes = [
    {
        path: '/',
        name: 'demo',
        component: load('demo'),
        meta: {
            title: '例子'
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
