<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Page\BaseController;

class ParserController extends BaseController
{
    protected $hasJs = true;
    protected $viewName = 'parser';

    protected function viewData():array
    {
        return [
            'parser' => [
                'CharCode' => [
                    'on' => 'on',
                    'off' => 'off',
                    'func' => 'charcode',
                ],
                'Base64' => [
                    'on' => 'encode',
                    'off' => 'decode',
                    'func' => 'base64',
                ],
                'JSon' => [
                    'on' => 'pretty',
                    'off' => 'minify',
                    'func' => 'jsonencode',
                ],
                'JSonRich' => [
                    'on' => 'pretty',
                    'off' => 'minify',
                    'func' => 'jsonrichencode',
                ],
                'Url' => [
                    'on' => 'encode',
                    'off' => 'decode',
                    'func' => 'urlencode',
                ],
            ],
        ];
    }
}
