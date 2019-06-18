#!/usr/bin/env bash

ARCHIVE=has_contact.tar.gz

rm -rf dist
mkdir -p dist
tar -c --exclude $ARCHIVE . > "dist/$ARCHIVE"
echo "sha512sum: $(shasum -a 512 dist/$ARCHIVE)"
