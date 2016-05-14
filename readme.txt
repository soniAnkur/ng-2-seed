1.npm install -g typescript
2. tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata
3.typings.json
{
    "ambientDependencies":
  {
         "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#6697d6f7dadbf5773cb40ecda35a76027e0783b2"
   }npm install angular2 --save
then.....
npm install systemjs --save
}



4.npm install systemjs -save
5.npm instal typings --save-dev
6.npm install concurrently --save-dev

7. add :: "scripts": {
              "postinstall": "npm run typings install",
              "tsc": "tsc",
              "tsc:w": "tsc -w",
              "lite": "lite-server",
              "app": "concurrent \"npm run tsc:w\" \"npm run lite\" ",
              "typings": "typings",
           }, to package.json
8. npm run app
