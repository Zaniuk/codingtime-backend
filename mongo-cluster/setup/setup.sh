#!/bin/bash
echo ***********************************************
echo "Setting up the mongo cluster"
echo ***********************************************

sleep 10 | echo "Waiting for the mongo cluster to start"
mongosh mongodb://mongo-rs0-1:27017 replicaSet.js