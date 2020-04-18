<?php

namespace App\Utils;

use App\Utils\ArrayUtils;
use GetId3\GetId3Core as GetId3;

class FileUtils
{
    CONST EXTENSION_IMAGE = ['gif', 'jpg', 'jpeg', 'png', 'webp'];
    CONST EXTENSION_VIDEO = ['mp4', 'webm', 'wmv'];

    static $isDeprecated = false;
    static public function getVideoSize(string $filepath)
    {
        if(!self::$isDeprecated) {
            self::$isDeprecated = true;
            error_reporting(E_ALL ^ E_DEPRECATED);
        }

        $getID3 = new GetId3();
        $details = $getID3->analyze($filepath);

        // [width, height] - as per getimagesize();
        return [
            ArrayUtils::getSub($details, ['video', 'resolution_x'], 0),
            ArrayUtils::getSub($details, ['video', 'resolution_y'], 0),
        ];
    }

    static public function isImage(string $extension)
    {
        return in_array($extension, self::EXTENSION_IMAGE);
    }

    static public function isVideo(string $extension)
    {
        return in_array($extension, self::EXTENSION_VIDEO);
    }
}
