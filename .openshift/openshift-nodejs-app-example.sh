#!/bin/bash
####
# Red Hat
# @author: Asier Cidon
# @date: 20200330
####
#
# Process template to deploy a NodeJS App 
#

usage() {
echo "Usage: $0 <project_name>"
echo "Example:"
echo "  ./openshift-nodejs-app-example.sh nodejs-app-example"
exit 1
}

[[ $# -eq 0 ]] && usage


PROJECT_NAME=$1
SERVICE_NAME="nodejs-app-example"
SERVICE_GIT_URL="https://github.com/acidonper/nodejs-app-example.git"

# Create a deployment config object charged with the container creation and inject environment variables 
oc process -f openshift-nodejs-app-example-template.yaml  \
-p NAMESPACE=$PROJECT_NAME \
-p SERVICE_NAME=$SERVICE_NAME  \
-p SERVICE_GIT_URL=$SERVICE_GIT_URL | oc create -f - -n $PROJECT_NAME

# Start build image
oc start-build bc/$SERVICE_NAME
