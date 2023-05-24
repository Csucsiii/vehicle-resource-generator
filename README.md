# vehicle-resource-generator

#### Create an input folder into script's folder, and place the whole vehicle resource to it.
##### Use some node package manager like npm, yarn or pnmp (pnpm is the recommended).

```bat
pnpm install
```

##### After all of node modules have been installed use `build` command to compile TypeScript code to JavaScript.

```bat
pnpm build
```

##### If TypeScript has been builded then use `start` command to run this script.

```bat
pnpm start
```

##### If everything went well, then the script will make an `output` folder, where all of vehicles have been merged to one resource, you just need to copy them into a folder in your `resources` folder and place `__resource.lua` file.

##### The structure should be look like
```
output/
    data/
        --All of vehicle resources name which stores their .meta files.
    stream/
        --All of vehicle resources name which stores their streaming files.
```
