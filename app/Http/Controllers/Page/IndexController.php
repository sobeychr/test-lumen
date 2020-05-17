<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Page\BaseController;

class IndexController extends BaseController
{
    protected $viewName = 'index';

    protected function viewData():array
    {
        return [
            'links' => [
                'parser',
                'sort',
                'timer',
            ],
        ];
    }
}
