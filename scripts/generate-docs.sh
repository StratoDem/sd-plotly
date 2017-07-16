#!/usr/bin/env bash

cd ..
mkdir docs

GRAPHS_DIR=graphs
CORE_DIR=core

# Iterate over the directories
for rel_dir in ${GRAPHS_DIR} ${CORE_DIR}
    do
    ES6_DIR=src/es6/${rel_dir%*/}
    DOC_DIR=docs/${rel_dir%*/}/
    echo "Generating docs into ${DOC_DIR}"
    mkdir ${DOC_DIR}

    for JSX_FILE in ${ES6_DIR}/*; do
        if [[ ${JSX_FILE} =~ \.jsx$ ]]
        then
            DOC_FILE_NAME=$(basename ${JSX_FILE})
            DOC_FILE_NAME="${DOC_FILE_NAME%%.*}"
            DOC_FILE_NAME=${DOC_FILE_NAME}.json
            echo "Generating ${PWD}/${DOC_DIR}${DOC_FILE_NAME} from ${JSX_FILE}"

            react-docgen ${JSX_FILE} \
                --extension jsx \
                --pretty \
                > ${DOC_DIR}${DOC_FILE_NAME}
        fi
    done
done

#python scripts/docs-to-md.py
