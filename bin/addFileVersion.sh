#!/bin/bash

filename=${1}
fileextension=${2}
indexextension=${3}
completename=${filename}.${fileextension}
indexfile=index.${indexextension}

touch ${completename} &&
echo "export * from './${filename}';" >> ${indexfile} &&
echo "export {}" >> ${completename}
