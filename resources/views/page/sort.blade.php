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
        <div class='col'>

        </div>
    </div>

    @include('template.modal', [
        'title' => 'Loading...',
        'id' => 'modal',
    ])

@endsection
