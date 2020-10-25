#!/bin/bash 

#This is a script for recovering after a git reset --hard
cd PROJECTPATH/.git/lost-found/other 
FILES=*
COUNTER=0 
for f in $FILES 
do   
echo "Processing $f file..."
git show $f > "RECOVERYPATH/$COUNTER.m"
let COUNTER=COUNTER+1 
done