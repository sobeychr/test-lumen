<div class='modal fade' id='{{$id ?? 'modal'}}' tabindex='-1' role='dialog' aria-hidden='true'>
    <div class='modal-dialog modal-dialog-centered' role='document'>
        <div class='modal-content'>
            @isset($title)
                <div class='modal-header'>
                    <h5 class='modal-title'>{{$title}}</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
            @endisset
            @isset($body)
                <div class='modal-body'>
                    {{$body}}
                </div>
            @endisset
            @isset($footer)
                <div class='modal-footer'>
                    {{$footer}}
                </div>
            @endisset
        </div>
    </div>
</div>
