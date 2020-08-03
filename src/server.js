const express = require('express');
const {createBundleRenderer} = require('vue-server-renderer');
const path = require('path');
const fs = require('fs');
const app = express();
const serverBundle = path.resolve(process.cwd(), 'serverDist', 'vue-ssr-server-bundle.json');
const clientManifestPath = path.resolve(process.cwd(), 'dist', 'vue-ssr-client-manifest.json');
const clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'));
const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
});

app.use(express.static(path.resolve(process.cwd(), 'dist')));

app.get('*', function(req, res) {
    const context = {
        url: req.url
    };
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err);
            res.send('500 server error');
            return;
        }
        res.send(html);
    })
});

app.listen(3001, () => {
    console.log('listen:3001');
});