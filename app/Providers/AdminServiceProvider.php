<?php

namespace App\Providers;

use S4mpp\AdminPanel\Navigation\Page;
use Illuminate\Support\ServiceProvider;
use App\Http\Controllers\DashboardAdminController;

class AdminServiceProvider extends ServiceProvider
{
    public function register()
    {
        Page::create('Dashboard')->target([DashboardAdminController::class, 'index'])->slug('dashboard')->order(0)->name('dashboard');
    }
}