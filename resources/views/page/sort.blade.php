@extends('layout.page')

@section('header', 'Sort')

@section('main')
    <div class='row'>
        <div class='col'>
            @include('template.dropdown', [
                'title' => 'Select folder...',
                'menu' => $folders,
                'id' => 'folder',
            ])
            <button class='btn btn-secondary disabled' id='load' disabled type='button'>
                Load
            </button>
            <button class='btn btn-info disabled' id='launch' disabled type='button'>
                Launch
            </button>
        </div>
    </div>
    <div class='row'>
        <div class='col-6'>
            <ul class='list-group' id='list'>
                <li class='list-group-item list-group-item-action template' data-status='1'>
                    <div>
                        <a class='name' href='#'></a>
                        <span class='details'>
                            <span class='size'></span>
                            <span class='date'></span>
                        </span>
                    </div>
                    <div>

                    </div>
                </li>
            </ul>
        </div>
        <div class='col-6'>
            <div id='preview'>
                <img class='hide'/>
                <video class='hide' autoplay controls loop muted/>
            </div>
        </div>
    </div>
    @include('template.modal', [
        'title' => 'Loading...',
        'titleClose' => false,
        'progress' => true,
    ])
@endsection
