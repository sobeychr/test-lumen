<?php

namespace App\Utils;

class ArrayUtils
{
    static public function getSub(array $arr, array $keys, $default)
    {
        $return = $arr;
        foreach($keys as $key) {
            if(is_array($return) && array_key_exists($key, $return)) {
                $return = $return[$key];
            }
            else {
                $return = $default;
                break;
            }
        }
        return $return;
    }
}
