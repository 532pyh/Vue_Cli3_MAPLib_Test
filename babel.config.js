module.exports = {
    "presets": ["@vue/app"],
    "plugins": [
        [
            "import",
            {
                "libraryName": "map-lib-test",
                "camel2DashComponentName": false,
                "camel2UnderlineComponentName": false
            }
        ],
    ]
}
