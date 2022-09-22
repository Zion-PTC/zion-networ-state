#!/bin/bash

spdx="// SPDX-License-Identifier: MIT"
copyright="// Copyright Giacomo Gagliano and Zion Protocol contributors\n"
pragma="pragma solidity ^0.8.0;\n"

baseName=${PWD##*/}

contractFile=${baseName}
interfaceFile=I${contractFile}
privateFile=Private${baseName}
iprivateFile=I${privateFile}
aprivateFile=A${privateFile}

interface=interface
private=private

contract=${contractFile}.sol
privatecontract=${private}/${privateFile}.sol
iprivate=${private}/${iprivateFile}.sol
aprivate=${private}/${aprivateFile}.sol
interface=${interface}/${interfaceFile}.sol

mkdir private &&
mkdir interface &&
mkdir extensions &&
touch ${contract} &&
touch ${privatecontract} &&
touch ${aprivate} &&
touch ${iprivate} &&
touch ${interface} &&

# contract
echo ${spdx} >> ${contract}
echo ${copyright} >> ${contract}
echo ${pragma} >> ${contract}
echo "import './interface/${interfaceFile}.sol';" >> ${contract}
echo "import './private/${privateFile}.sol';\n" >> ${contract}
echo "contract ${contractFile} is ${interfaceFile}, ${privateFile} {}" >> ${contract}

# private
echo ${spdx} >> private/${privateFile}.sol
echo ${copyright} >> private/${privateFile}.sol
echo ${pragma} >> private/${privateFile}.sol
echo "import './${aprivateFile}.sol';\n" >> private/${privateFile}.sol
echo "contract ${privateFile} is ${aprivateFile} {}" >> private/${privateFile}.sol

# # aprivate
echo ${spdx} >> private/${aprivateFile}.sol
echo ${copyright} >> private/${aprivateFile}.sol
echo ${pragma} >> private/${aprivateFile}.sol
echo "import './${iprivateFile}.sol';\n" >> private/${aprivateFile}.sol
echo "abstract contract ${aprivateFile} is ${iprivateFile} {}" >> private/${aprivateFile}.sol

# # iprivate
echo ${spdx} >> private/${iprivateFile}.sol
echo ${copyright} >> private/${iprivateFile}.sol
echo ${pragma} >> private/${iprivateFile}.sol
echo "interface ${iprivateFile} {}" >> private/${iprivateFile}.sol

# # # interface
echo ${spdx} >> interface/${interfaceFile}.sol
echo ${copyright} >> interface/${interfaceFile}.sol
echo ${pragma} >> interface/${interfaceFile}.sol
echo "import '../private/${iprivateFile}.sol';\n" >> interface/${interfaceFile}.sol
echo "interface ${interfaceFile} is ${iprivateFile} {}" >> interface/${interfaceFile}.sol

echo "Files created ${baseName}"
