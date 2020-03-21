@extends('layout.page')

@section('main')
    <nav>
        @foreach($links as $link)
            <a href='{{$link}}' class='link {{$link}}'>{{$link}}</a>
        @endforeach
    </nav>
@endsection
