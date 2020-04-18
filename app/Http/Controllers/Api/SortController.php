<?php

namespace App\Http\Controllers\Api;

use \DirectoryIterator;
use App\Config\SortConfig;
use App\Http\Controllers\Controller as BaseController;
use App\Utils\FileUtils;
use Illuminate\Http\{Request, JsonResponse};

class SortController extends BaseController
{
    const STAUS_UNSORT = 1;
    const STAUS_EDIT = 2;
    const STAUS_DELETE = 3;

    const KEY_DATE = 'date';
    const KEY_HEIGHT = 'height';
    const KEY_NAME = 'name';
    const KEY_SIZE = 'size';
    const KEY_WIDTH = 'width';

    const LIST_LIMIT = 75;

    static $isDeprecated = false;

    public function launch(Request $request):JsonResponse
    {
        $list = $request->input('list');

        if(empty($list)) {
            return response()->json([
                'failures' => 0,
                'length' => 0,
                'list' => [],
                'log' => 'empty list',
                'status' => 'fail',
                'successes' => 0,
            ], 400);
        }

        $successes = 0;
        $failures = 0;
        $log = [];

        foreach($list as $parse) {
            list($source, $status) = $parse;

            if(file_exists($source)) {
                $intStatus = intval($status);
                $destName = basename($source);
                $destRoot = false;

                if($intStatus === self::STAUS_UNSORT) {
                    $destRoot = SortConfig::DEST_UNSORT;
                }
                elseif($intStatus === self::STAUS_EDIT) {
                    $destRoot = SortConfig::DEST_EDIT;
                }
                elseif($intStatus === self::STAUS_DELETE) {
                    $destRoot = SortConfig::DEST_DELETE;
                }
                else {
                    $destRoot = SortConfig::DEST_NAME;
                    $destName = $status . substr($destName, strpos($destName, '.'));
                }

                $dest = $destRoot . $destName;
                $success = rename($source, $dest);

                if($success) {
                    $successes++;
                }
                else {
                    $failures++;
                }

                $log[] = [
                    '$source' => $source,
                    '$status' => $status,
                    '$intStatus' => $intStatus,
                    '$destName' => $destName,
                    '$destRoot' => $destRoot,
                    '$dest' => $dest,
                    '$success' => $success,
                ];
            }
        }


        return response()->json([
            'length' => count($list),
            'list' => $list,
            'failures' => $failures,
            'log' => $log,
            'status' => 'success',
            'successes' => $successes,
        ]);
    }

    public function load(int $folder):JsonResponse
    {
        $folderPath = SortConfig::FOLDERS[$folder] ?? '';
        if(!$folderPath) {
            return response()->json([
                'log' => 'invalid folder',
                'files' => [],
                'folder' => $folder,
                'path' => $folderPath,
                'status' => 'fail',
            ], 400);
        }

        $t = 0;
        $deprecated = false;
        $log = [];

        $files = [];
        foreach(new DirectoryIterator($folderPath) as $file)
        {
            $filepath = $file->getPathname();
            $ext = $file->getExtension();
            $isImage = FileUtils::isImage($ext);
            $isVideo = FileUtils::isVideo($ext);

            if($file->isDir() || (!$isImage && !$isVideo)) {
                continue;
            }

            $height = 0;
            $width = 0;

            if($isImage) {
                list($width, $height) = getimagesize($filepath);
            }
            else {
                list($width, $height) = FileUtils::getVideoSize($filepath);
            }

            $files[] = [
                self::KEY_DATE => $file->getCTime(),
                self::KEY_HEIGHT => $height,
                self::KEY_NAME => $file->getFilename(),
                self::KEY_SIZE => $file->getSize(),
                self::KEY_WIDTH => $width,
            ];

            if(count($files) >= self::LIST_LIMIT) {
                break;
            }
        }

        return response()->json([
            'log' => $log,
            'files' => $files,
            'folder' => $folder,
            'length' => count($files),
            'path' => $folderPath,
            'status' => 'success',
        ]);
    }
}
