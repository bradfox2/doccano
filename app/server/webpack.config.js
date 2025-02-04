const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        'sequence_labeling': './static/js/sequence_labeling.js',
        'document_classification': './static/js/document_classification.js',
        'seq2seq': './static/js/seq2seq.js',
        'projects': './static/js/projects.js',
        'stats': './static/js/stats.js',
        'label': './static/js/label.js',
        'labels_admin': './static/js/labels_admin.js',
        'labelers': './static/js/labelers.js',
        'guideline': './static/js/guideline.js',
        'demo_text_classification': './static/js/demo/demo_text_classification.js',
        'demo_named_entity': './static/js/demo/demo_named_entity.js',
        'demo_translation': './static/js/demo/demo_translation.js',
        'upload': './static/js/upload.js',
        'navbar': './static/js/navbar.js',
        'settings': './static/js/settings.js',
        'dataset': './static/js/dataset.js',
        'users': './static/js/users.js',
        'user': './static/js/user.js',
        'user_info': './static/js/user_info.js',
        'ml_model': './static/js/ml_model.js'
    },
    output: {
        path: __dirname + '/static/bundle',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
}