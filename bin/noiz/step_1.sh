#!/bin/bash

bin=/Users/WAW/Documents/Projects/zion-network-state/bin
noiz=$bin/noiz
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type1.sh
answerScript=$answers/type1.sh

answer=$(sh $questionScript)
result=$(sh $answerScript $answer)
echo $result
