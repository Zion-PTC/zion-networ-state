#!/bin/bash

directory=${1}
indexpath=${directory}/index.ts
filepath=${directory}/v1.tsx

mkdir ${directory} &&
touch ${indexpath} &&
echo "export * from './v1'" >> ${indexpath} &&
touch ${filepath} &&
echo "export {}" >> ${filepath} &&
echo finished