<?php

namespace App\Http\Controllers\Page;

use App\Config\SortConfig;
use App\Http\Controllers\Page\BaseController;

class SortController extends BaseController
{
    protected $addJs = ['popper.min'];
    protected $hasJs = true;
    protected $viewName = 'sort';

    protected function viewData():array
    {
        return [
            'folders' => SortConfig::FOLDERS,
        ];
    }
}
