<?php

return [
	'guard' => 'admin',

	'prefix' => env('ADMIN_PREFIX', 'painel'),

	'logo' => [
		'light' => 'images/logo-light.png',
		'dark' => 'images/logo-dark.png'
	],

    'vite' => [
		'css' => ['resources/css/app.css'],
		'js' => ['resources/js/app.js']
	],

	'super_admin_id' => env('SUPER_ADMIN_ID'),
];
