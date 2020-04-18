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
                        <a class='name ellipsis' href='#'></a>
                        <span class='details'>
                            <span class='size'></span>
                            <span class='date'></span>
                        </span>
                    </div>
                    <div>
                        <input type='text' placeholder='// name' class='input-name'/>

                        <div class='btn-group btn-group-sm buttons' aria-label='Testing'>
                            <button type='button' class='btn btn-outline-info btn-name'>Name</button>
                            <button type='button' class='btn btn-outline-light btn-edit'>Edit</button>
                            <button type='button' class='btn btn-outline-danger btn-delete'>Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class='col-6'>
            <a href='#' id='preview' target='_blank'>
                <img class='hide'/>
                <video class='hide' autoplay controls loop muted></video>

                <p class='width hide'></p>
                <p class='height hide'></p>
            </a>
        </div>
    </div>
    @include('template.modal', [
        'title' => 'Loading...',
        'titleClose' => false,
        'progress' => true,
    ])
@endsection
