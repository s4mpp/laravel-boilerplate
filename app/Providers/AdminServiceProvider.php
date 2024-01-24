<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use S4mpp\AdminPanel\Factories\Navigation;
use App\Http\Controllers\DashboardAdminController;

class AdminServiceProvider extends ServiceProvider
{
    public function register()
    {
        Navigation::item('Dashboard')->target([DashboardAdminController::class, 'index'])->route('dashboard')->setOrder(0);
    }
}