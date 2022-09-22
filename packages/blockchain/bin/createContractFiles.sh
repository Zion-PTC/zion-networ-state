#!/bin/bash

spdx="// SPDX-License-Identifier: MIT"
copyright="// Copyright Giacomo Gagliano and Zion Protocol contributors\n"
pragma="pragma solidity ^0.8.0;\n"

baseName=${PWD##*/}

index=index.sol
privateFile=Private${baseName}
private=${privateFile}.sol
iprivateFile=I${privateFile}
iprivate=${iprivateFile}.sol
aprivateFile=A${privateFile}
aprivate=${aprivateFile}.sol

extensions=extensions
contractFile=${baseName}
interfaceFile=I${contractFile}
interfaceFileExt=I${contractFile}.sol
contract=${extensions}/${contractFile}.sol
interface=${extensions}/${interfaceFile}.sol

touch ${index} &&
touch ${private} &&
touch ${aprivate} &&
touch ${iprivate} &&
mkdir extensions &&
touch ${contract} &&
touch ${interface} &&

# private
echo ${spdx} >> ${private} &&
echo ${copyright} >> ${private}
echo ${pragma} >> ${private}
echo "import './${aprivate}';\n" >> ${private}
echo "contract ${privateFile} is ${aprivateFile} {}" >> ${private}

# aprivate
echo ${spdx} >> ${aprivate}
echo ${copyright} >> ${aprivate}
echo ${pragma} >> ${aprivate}
echo "import './${iprivate}';\n" >> ${aprivate}
echo "abstract contract ${aprivateFile} is ${iprivateFile} {}" >> ${aprivate}

# iprivate
echo ${spdx} >> ${iprivate}
echo ${copyright} >> ${iprivate}
echo ${pragma} >> ${iprivate}
echo "interface ${iprivateFile} {}" >> ${iprivate}

# contract
echo ${spdx} >> ${contract}
echo ${copyright} >> ${contract}
echo ${pragma} >> ${contract}
echo "import './${interfaceFileExt}';" >> ${contract}
echo "import '../${private}';\n" >> ${contract}
echo "contract ${contractFile} is ${interfaceFile}, ${privateFile} {}" >> ${contract}

# interface
echo ${spdx} >> ${interface}
echo ${copyright} >> ${interface}
echo ${pragma} >> ${interface}
echo "import '../${iprivate}';\n" >> ${interface}
echo "interface ${interfaceFile} is ${iprivateFile} {}" >> ${interface}

#index
echo ${spdx} >> ${index}
echo ${copyright} >> ${index}
echo ${pragma} >> ${index}
echo "import './${private}';" >> ${index}
echo "import './${aprivate}';" >> ${index}
echo "import './${iprivate}';" >> ${index}
echo "import './${contract}';" >> ${index}
echo "import './${interface}';" >> ${index}

echo "Files created ${baseName}"
