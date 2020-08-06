module.exports = {
    "presets": ["@vue/app"],
    "plugins": [
        [
            "import",
            {
                "libraryName": "map-lib-test",
                "camel2DashComponentName": false,
                "camel2UnderlineComponentName": false,
                "style": (name) =>{
                    const cssName = name.split('/')[2];
                    console.log(cssName)
                    return `map-lib-test/lib/style/${cssName}.css`
                }
            }
        ],
    ]
}
