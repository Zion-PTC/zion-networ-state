#!/bin/bash

answer=0
class=class
component=component
hook=hook
styled=styled

TYPES1=""
TYPES1="${TYPES1} $class"
TYPES1="${TYPES1} $component"
TYPES1="${TYPES1} $hook"
TYPES1="${TYPES1} $styled"

for TYPE in ${TYPES1}; do
  echo ${TYPE}
done
