#!/bin/sh
echo "[GitClean] Removing all uncommited bar ./scriptcraft dir"
git clean -x -f -e ./scriptcraft
echo "[GitClean] Done"