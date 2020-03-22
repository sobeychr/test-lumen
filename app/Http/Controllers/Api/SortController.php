<?php

namespace App\Http\Controllers\Api;

use \DirectoryIterator;
use App\Config\SortConfig;
use App\Http\Controllers\Controller as BaseController;
use Illuminate\Http\{Request, JsonResponse};

class SortController extends BaseController
{
    const KEY_DATE = 'date';
    const KEY_NAME = 'name';
    const KEY_SIZE = 'size';

    const LIST_LIMIT = 75;

    public function load(int $folder):JsonResponse
    {
        $folderPath = SortConfig::FOLDERS[$folder] ?? '';
        if(!$folderPath) {
            return response()->json([
                'id' => $folder,
                'path' => $folderPath,
                'files' => [],
                'status' => 'fail',
                'log' => 'invalid folder',
            ], 400);
        }

        $files = [];
        foreach(new DirectoryIterator($folderPath) as $file)
        {
            if($file->isDir()) {
                continue;
            }
            $files[] = [
                self::KEY_DATE => $file->getCTime(),
                self::KEY_NAME => $file->getFilename(),
                self::KEY_SIZE => $file->getSize(),
            ];

            if(count($files) >= self::LIST_LIMIT) {
                break;
            }
        }

        return response()->json([
            'id' => $folder,
            'path' => $folderPath,
            'files' => $files,
            'length' => count($files),
            'status' => 'success',
        ]);
    }
}
