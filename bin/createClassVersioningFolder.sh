#!/bin/bash

directory=${1}
indexpath=${directory}/index.ts
filepath=${directory}/${directory}_v1.ts

mkdir ${directory} &&
touch ${indexpath} &&
echo "export * from './${directory}';" >> index.ts
echo "import { ${directory}_v1 } from './${directory}_v1';" >> ${indexpath}
echo "" >> ${indexpath}
echo "export const ${directory} = ${directory}_v1;" >> ${indexpath} &&
touch ${filepath} &&
echo "export const ${directory}_v1 = '${directory}_v1';" >> ${filepath} &&
echo "done!!🏁🚀"