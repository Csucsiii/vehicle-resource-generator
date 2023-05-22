import fs from "fs";
import path from "path";

const copyFilesWithSpecificName = (source: string, target: string, extensions?: string[]) => {
    if (!fs.existsSync(source)) return;
    if (!fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    const files = fs.readdirSync(source);

    files.forEach((file) => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        const stats = fs.statSync(sourcePath);

        if (stats.isDirectory()) {
            copyFilesWithSpecificName(sourcePath, target, extensions);
        } else {
            if (extensions && extensions.length){
                extensions.forEach((extension) => {
                    if (path.extname(file) === extension){
                        fs.copyFileSync(sourcePath, targetPath);
                    }
                });
            }else{
                fs.copyFileSync(sourcePath, targetPath);
            }
            
        }
    });
};

const main = async () => {
    const INPUT_FOLDER = path.join("input");
    const OUTPUT_FOLDER = path.join("output");

    if (fs.existsSync(INPUT_FOLDER)) {
        const directories = fs.readdirSync(INPUT_FOLDER);
        const mainFolderPath = OUTPUT_FOLDER;

        if (!fs.existsSync(mainFolderPath)){
            fs.mkdirSync(mainFolderPath);
        }

        directories.forEach((dir) => {
            const resourceFolder = dir; 
            const streamPath = path.join(mainFolderPath, "stream");
            const dataPath = path.join(mainFolderPath, "data");

            if (!fs.existsSync(streamPath)){
                fs.mkdirSync(streamPath);
            }

            const resourceStreamFolder = path.join(streamPath, resourceFolder);

            if (!fs.existsSync(resourceStreamFolder)){
                fs.mkdirSync(resourceStreamFolder);
            }

            copyFilesWithSpecificName(path.join(INPUT_FOLDER, dir, "stream"), resourceStreamFolder, [".yft", ".ytd"]);

            if (!fs.existsSync(dataPath)){
                fs.mkdirSync(dataPath);
            }

            const resourceDataFolder = path.join(dataPath, resourceFolder);

            if (!fs.existsSync(resourceDataFolder)){
                fs.mkdirSync(resourceDataFolder);
            }

            copyFilesWithSpecificName(path.join(INPUT_FOLDER, dir), resourceDataFolder, [".meta"]);
        });
    }else{
        fs.mkdirSync(INPUT_FOLDER);
        console.log("Created input folder, copy your vehicle resource into this folder.");
    }
};

main().catch((err) => console.log(err));
