#!/bin/bash

package=$1
workspace=$2
# bolt add ${package}
echo $workspace &&
  bolt w $workspace add -D $package &&
  bolt w $workspace add -P $package &&
  yarn manypkg fix &&
  echo "finished! 🕺"
