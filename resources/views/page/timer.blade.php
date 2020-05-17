@extends('layout.page')

@section('header', 'Timer')

@section('main')
    <div class='row'>
        <div class='col-3'>
            <div class='nav flex-column nav-pills'>
                <a class='nav-link active' href='#timeout'>
                    Timeout
                </a>
                <a class='nav-link' href='#tabata'>
                    Tabata
                </a>
                <a class='nav-link' href='#stopwatch'>
                    Stop Watch
                </a>
            </div>
        </div>
        <div class='col-9'>
            <div class='row tab-content' id='v-pills=tabContent'>
                <form class='tab-pane fade show active timer-forms' id='timeout' action=''>
                    <div class='input-group'>
                        <div class='input-group-prepend'>
                            <span class='input-group-text'>Start</span>
                        </div>
                        <input
                            type='text'
                            class='form-control input-filter no-edit'
                            id='timeout-input'
                            placeholder='0h 5m 0s'
                        />
                    </div>
                    <input type='submit' value='Send'/>
                </form>

                <div class='tab-pane fade' id='tabata'>
                    #tabata
                </div>

                <div class='tab-pane fade' id='stopwatch'>
                    #stopWatch
                </div>
            </div>
        </div>
    </div>
    <div class='row current'>
        <div class='input-group'>
            <div class='input-group-prepend'>
                <span class='input-group-text'>Current</span>
            </div>
            <input
                type='text'
                class='form-control input-filter no-edit'
                disabled
                id='output'
                placeholder='n/a'
            />
        </div>
    </div>
@endsection
