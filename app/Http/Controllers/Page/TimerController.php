<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Page\BaseController;

class TimerController extends BaseController
{
    protected $hasJs = true;
    protected $viewName = 'timer';

    protected function viewData():array
    {
        return [
        ];
    }
}
