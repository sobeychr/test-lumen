<?php

namespace App\Config;

class SortConfig
{
    const FOLDERS = [
        'E:/Downloads/',
        'E:/Downloads/4chan/',
        'E:/Downloads/9gag/',
        'E:/Downloads/derps-download/',
        'E:/Downloads/facebook/',
        'E:/Downloads/gifs/',
        'E:/Downloads/imgur/',
        'E:/Downloads/random-imgs/',
        'E:/Downloads/videos/',
    ];

    const STATUS_UNSORTED = 1;
    const STATUS_DELETE = 2;
    const STATUS_SORT = 3;
    const STATUS_NAME = 4;
    const STATUS_WEB = 4;

    const STATUS = [
        STATUS_UNSORTED,
        STATUS_DELETE,
        STATUS_SORT,
        STATUS_NAME,
        STATUS_WEB,
    ];
}
