#!/bin/bash


filename=${1}
fileextension=.tsx
completename=${filename}${fileextension}
indexfile=index.tsx

touch ${completename} &&
echo "export * from './"${filename}"'" >> ${indexfile} &&
echo "export {}" >> ${completename}