<!doctype html>
<html lang='en'>
    <head>
        <title>Lumen - {{$viewName}}</title>
        <link rel='icon' href='./assets/img/icons/{{$viewName}}.png' type='image/png'/>
        <link rel='shortcut icon' href='./assets/img/icons/{{$viewName}}.png' type='image/png'/>
        <link rel='stylesheet' type='text/css' href='./assets/css/bootstrap.min.css'/>
        <link rel='stylesheet' type='text/css' href='./assets/css/common.css#{{$time}}'/>
        <link rel='stylesheet' type='text/css' href='./assets/css/{{$viewName}}.css#{{$time}}'/>
        @if($hasJs)
            <script src='./assets/js/jquery.min.js'></script>
            <script src='./assets/js/bootstrap.min.js'></script>
            <script src='./assets/js/common.js#{{$time}}'></script>
            <script src='./assets/js/{{$viewName}}.js#{{$time}}'></script>
        @endif
    </head>
    <body>
        @hasSection('header')
            <header class='header bg-dark'>
                <a href='/' class='main-link'>&lt;</a>
                <span>@yield('header')</span>
            </header>
        @endif
        {{--
        @hasSection('aside')
            <aside>
                <button class='aside__button'></button>
                @yield('aside')
            </aside>
        @endif
        --}}
        @hasSection('main')
            <main class='container'>
                @yield('main')
            </main>
        @endif
        @hasSection('footer')
            <footer>
                @yield('footer')
            </footer>
        @endif
    </body>
</html>
