#!/bin/bash

# USER INPUT
version=${1}

# variables
filename=${PWD##*/}
versionExtension=_v${version}
builtFilename=${filename}${versionExtension}
propsFilename=${builtFilename}Props
fileextension=.tsx
completename=${builtFilename}${fileextension}
indexfile=index.ts
longpath1="import {"
longpath2="  ${builtFilename} as v${version},"
longpath3="  ${propsFilename} as v${version}Props"
longpath4="} from './${builtFilename}';"
# script

# // ComponentFile
touch ${completename} &&
  echo "export const ${builtFilename} = '${builtFilename}'" >>${completename} &&
  echo "export type ${propsFilename} = '${propsFilename}'" >>${completename}

# // index file
echo ${longpath1} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath2} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath3} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo ${longpath4} | cat - ${indexfile} >temp && mv temp ${indexfile} &&
  echo "" >>${indexfile} &&
  echo "export const ${builtFilename} = v${version};" >>${indexfile} &&
  echo "export type ${propsFilename} = v${version}Props;" >>${indexfile} &&
  echo "done!!🏁🚀"
