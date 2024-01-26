const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

let fileNames = [];
let photoData = [];

function getFiles(dirPath) {
    fs.readdirSync(dirPath).forEach(file => {
        let fullPath = path.join(dirPath, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            getFiles(fullPath);
        } else if (path.extname(fullPath) === ".md") {
            fileNames.push(fullPath);
            extractImagePaths(fullPath);
        }
    });
}

function extractImagePaths(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let $ = cheerio.load(content);
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let match = lines[i].match(/{{<figure src="([^"]*)"( caption="(.*?)")?>}}/);
        if (match) {
            let photoInfo = {
                src: match[1],
                postTitle: path.basename(filePath, '.md'),
                caption: match[3] || (lines[i + 1] && lines[i + 1].startsWith('- ') ? lines[i + 1].slice(2) : null),
                postPath: filePath
            };
            photoData.push(photoInfo);
        }
    }
}

getFiles('/Users/jonbo/Github/jborichevskiy/up-and-to-the-right/content');
console.log(fileNames);
console.log(photoData);


const staticDir = '/Users/jonbo/Github/jborichevskiy/up-and-to-the-right/static';
const outputDir = '/Users/jonbo/Github/photosjonbo';

const ignore = [
    'new-tab',
]
const uniquePosts = [...new Set(photoData.map(photo => photo.postTitle))];

uniquePosts.forEach(postTitle => {
    if (!ignore.includes(postTitle)) {
        let postDir = path.join(outputDir, `[${postTitle}]`);
        if (!fs.existsSync(postDir)){
            fs.mkdirSync(postDir);
        }
        let postPhotos = photoData.filter(photo => photo.postTitle === postTitle);
        postPhotos.forEach(photo => {
            console.log({photo})
            let sourcePath = path.join(staticDir, photo.src);
            let destinationPath = path.join(postDir, path.basename(photo.src));
            fs.copyFileSync(sourcePath, destinationPath);
        });
    }
});
