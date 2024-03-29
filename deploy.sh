#!/bin/bash

git pull

npm run deploy # билдит gh-pages

read -p "Нужен ли git push? y/n:   > " isGitPush
if [[ ${isGitPush} == "y" ]]
then
    read -p "Укажите имя коммита:   > " commit
    if [[ ${commit} == "" ]]
    then
        commit="no name"
    fi

    git add .
    git commit -m "${commit}"
    # echo '7383125@mail.ru'
    # echo 'zharikovartem'
    # echo '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'
    git push
fi