<?php

return [
	'guard' => 'admin',

	'prefix' => env('ADMIN_PREFIX'),

	'logo' => [
		'light' => 'images/logo-light.png',
		'dark' => 'images/logo-dark.png'
	],

    'vite' => [
		'css' => ['resources/css/app.css'],
		'js' => ['resources/js/app.js']
	],
];
