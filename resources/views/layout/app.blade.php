<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Teh Wobsite</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>

<body class="antialiased">

<main>
    @yield('content')
</main>

<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
