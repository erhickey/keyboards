#!/usr/bin/env bash

set -o errexit

KEYBOARD="$1"
KEYMAP="$2"

qmk json2c -o keymap.c keymap.json

KM_DIR="$HOME/qmk_firmware/keyboards/$KEYBOARD/keymaps/$KEYMAP"
mkdir "$KM_DIR"

cp ./config.h "$KM_DIR"
cp ./rules.mk "$KM_DIR"
cp ./keymap.c "$KM_DIR"

rm ./keymap.c

qmk compile -kb "$KEYBOARD" -km "$KEYMAP"

rm -rf "$KM_DIR"

mv ~/qmk_userspace/*.hex .
