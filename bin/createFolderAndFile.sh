#!/bin/bash

directory=${1}
file=${2}
indexpath=${directory}/index.ts
filepath=${directory}/${file}

mkdir ${directory} &&
touch ${indexpath} &&
echo "export * from './v1'" >> ${indexpath} &&
touch ${filepath} &&
echo "export {}" >> ${filepath} &&
echo finished