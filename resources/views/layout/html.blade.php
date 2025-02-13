<!DOCTYPE html>
<html class="h-full" lang="pt-BR">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>{{ config('app.name') }} | @yield('title')</title>

		@vite('resources/css/app.css')
		@livewireStyles
	</head>
	<body class="h-full text-base-700">
        @yield('body')

		<h1>Aplicação pronta!</h1>
        
        @vite('resources/js/app.js')
		
		@livewireScriptConfig 
	</body>
</html>