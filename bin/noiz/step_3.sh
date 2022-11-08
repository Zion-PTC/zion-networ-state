#!/bin/bash

bin=/Users/WAW/Documents/Projects/zion-network-state/bin
noiz=$bin/noiz
questions=$noiz/questions
answers=$noiz/answers
questionScript=$questions/type3.sh
answerScript=$answers/type3.sh

answer=$(sh $questionScript)
result=$(sh $answerScript $answer)
echo $result
