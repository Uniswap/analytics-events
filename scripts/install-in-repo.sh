#!/bin/bash

mv uniswap-analytics-events-dev.tgz $ANALYTICS_IMPLEMENTING_REPO_PATH/uniswap-analytics-events-dev.tgz

(
    cd $ANALYTICS_IMPLEMENTING_REPO_PATH
    if [ "$ANALYTICS_IMPLEMENTING_REPO_INSTALL" = "yarn" ]; then
        CACHE_DIR=$(yarn cache dir)
        rm -rf $CACHE_DIR/.tmp/*
        yarn add file:uniswap-analytics-events-dev.tgz
    elif [ "$ANALYTICS_IMPLEMENTING_REPO_INSTALL" = "npm" ]; then
        npm install uniswap-analytics-events-dev.tgz
    else
        echo "Invalid install type: " + $ANALYTICS_IMPLEMENTING_REPO_INSTALL
    fi
)
