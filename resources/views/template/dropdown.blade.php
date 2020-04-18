<div class='dropdown' id='{{$id ?? ''}}'>
    <button
        aria-expanded='false'
        aria-haspopup='true'
        class='btn btn-{{$level ?? 'primary'}} dropdown-toggle'
        data-toggle='dropdown'
        type='button'
    >
        <span class='title'>{{$title}}</span>
    </button>
    <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
        @foreach($menu as $index=>$item)
            <li>
                <button
                    type='button'
                    tabindex='-1'
                    class='dropdown-item'
                    data-index={{$index}}
                >
                    {{$item}}
                </button>
            </li>
        @endforeach
    </ul>
</div>
