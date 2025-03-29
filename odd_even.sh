#!/bin/bash

read -p "数値を入力してください: " num

if [ $((num % 2)) -eq 0 ]; then
  echo "$num は偶数です。"
else
  echo "$num は奇数です。"
fi
