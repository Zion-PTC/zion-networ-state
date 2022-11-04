#!/bin/bash

filename=${1}
fileextension=${2}
completename=${filename}.${fileextension}
indexfile=index.ts

touch ${completename} &&
echo "export * from './${filename}';" >> ${indexfile} &&
echo "export {}" >> ${completename}
