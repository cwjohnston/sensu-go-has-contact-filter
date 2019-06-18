#!/usr/bin/env bash

if [[ "${TRAVIS_TAG}" ]]; then
    VER=$TRAVIS_TAG
else
    VER=$(git rev-parse --short HEAD)
fi

RELEASE="sensu-go-has-contact-filter-${VER}"
ARCHIVE="${RELEASE}.tar.gz"

rm -rf dist
mkdir -p dist
tar -c {lib,README.md} > "dist/${ARCHIVE}"
cd dist

sha512sum "${ARCHIVE}" > "${RELEASE}_sha512-checksums.txt"