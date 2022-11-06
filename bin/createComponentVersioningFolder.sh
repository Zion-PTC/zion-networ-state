#!/bin/bash

directory=${1}
filepath=${directory}/${directory}_v1.tsx
builtFilename=${directory}_v1
propsFilename=${builtFilename}Props
indexfile=index.ts

indexpath=${directory}/index.ts

mkdir ${directory} &&
touch ${indexpath} &&

# root dir index
echo "export * from './${directory}';" >> ${indexfile} &&

# new folder index
#:before
echo "import {" >> ${indexpath} &&
echo "  ${builtFilename} as v1," >> ${indexpath} &&
echo "  ${propsFilename} as v1Props," >> ${indexpath} &&
echo "} from './${builtFilename}';" >> ${indexpath} &&

#:after
echo "" >> ${indexpath} &&
echo "///// EXPORT" >> ${indexpath} &&
echo "export type ${directory}Props = v1Props;" >> ${indexpath} &&
echo "export const ${directory} = v1;" >> ${indexpath} &&
echo "//////" >> ${indexpath} &&
echo "" >> ${indexpath} &&
echo "export type ${propsFilename} = v1Props;" >> ${indexpath} &&
echo "export const ${builtFilename} = v1;" >> ${indexpath} &&


# new folder file
touch ${filepath} &&
echo "export type ${propsFilename} = '${propsFilename}';" >> ${filepath} &&
echo "export const ${builtFilename} = '${builtFilename}';" >> ${filepath} &&
echo "done!!🏁🚀"