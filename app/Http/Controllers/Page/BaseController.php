<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    protected $hasJs = false;

    protected $viewName = '';

    public function main():string
    {
        $this->beforeView();

        $viewData = array_merge([
            'hasJs' => $this->hasJs,
            'viewName' => $this->viewName,
            'time' => time(),
        ], $this->viewData());

        $view = view('page.'.$this->viewName, $viewData);

        $this->afterView();

        return $view;
    }

    protected function viewData():array
    {
        return [];
    }

    protected function beforeView():void
    {

    }

    protected function afterView():void
    {

    }
}
