<div class='modal {{isset($fade) ? 'fade' : ''}}' id='{{$id ?? 'modal'}}' data-backdrop='static' tabindex='-1' aria-hidden='true'>
    <div class='modal-dialog modal-dialog-centered'>
        <div class='modal-content'>
            @isset($title)
                <div class='modal-header'>
                    <h5 class='modal-title'>{{$title}}</h5>
                    @if(isset($titleClose) && $titleClose)
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    @endif
                </div>
            @endisset
            @isset($progress)
                <div class='modal-body'>
                    <div class='progress' style='height: 15px;'>
                        <div class='progress-bar progress-bar-striped progress-bar-animated' style='width: 100%;'></div>
                    </div>
                </div>
            @elseif(isset($body))
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
