#!/bin/bash

folder=${1}
index=index.ts

mkdir ${folder} &&
echo "export * from './${folder}';" >> ${index} &&
touch ${folder}/index.ts &&
echo "export {}" >> ${folder}/index.ts &&
echo "done!!🏁🚀"

