<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/server', function() {
    $server = $_SERVER;
    ksort($server);
    return var_dump($server, true);
});

$router->get('/test', function() use ($router) {
    return $router->app->version();
});

$router->group(['namespace' => 'Page'], function() use ($router) {
    $router->get('/',         ['uses' => 'IndexController@main']);
    $router->get('/download', ['uses' => 'DownloadController@main']);
    $router->get('/parser',   ['uses' => 'ParserController@main']);
    $router->get('/sort',     ['uses' => 'SortController@main']);
});
