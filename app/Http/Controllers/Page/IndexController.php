<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Page\BaseController;

class IndexController extends BaseController
{
    protected $hasJs = false;
    protected $viewName = 'index';

    protected function viewData():array
    {
        return [
            'links' => [
                'download',
                'parser',
                'sort',
            ],
        ];
    }
}
