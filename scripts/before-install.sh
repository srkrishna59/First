#!/bin/bash
export FOLDER=/home/ubuntu/genesis-admin-frontend

if [ -d $FOLDER ]
then
 rm -rf $FOLDER
fi

mkdir -p $FOLDER
