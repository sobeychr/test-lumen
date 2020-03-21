@extends('layout.page')

@section('header', 'Parser')

@section('main')
    <div class='row'>
        <div class='col-4 bg-secondary'>
            @foreach($parser as $name => $entry)
                <p class='parser' data-func='{{$entry['func']}}'>
                @if($entry['on'])
                    <button class='on btn btn-info' type='button'>
                        {{$name}}
                        <span>{{$entry['on']}}</span>
                    </button>
                @endif
                @if($entry['off'])
                    <button class='off btn btn-warning' type='button'>
                        {{$name}}
                        <span>{{$entry['off']}}</span>
                    </button>
                @endif
            @endforeach
        </div>
        <div class='col-8'>
            <textarea id='in' placeholder='// input content' data-value=''></textarea>
        </div>
    </div>
    <div class='row'>
        <div class='col'>
            <pre id='out'></pre>
        <div class='col'>
    </div>
@endsection
