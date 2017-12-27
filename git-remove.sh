#!/bin/sh
echo "[GitCheckout] Removing ALL changes"
git checkout .
./git-clean.sh
echo "[GitCheckout] Done"