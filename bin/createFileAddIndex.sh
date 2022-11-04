#!/bin/bash

filename=${1}
fileextension=.ts
completename=${filename}${fileextension}
indexfile=index.ts

touch ${completename} &&
echo "export * from './${filename}';" >> ${indexfile} &&
echo "export {}" >> ${completename}