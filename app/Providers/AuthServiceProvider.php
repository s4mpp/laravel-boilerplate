<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

/**
 * @codeCoverageIgnore
 */
class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Gate::before(fn ($user, $ability): ?bool => ($user->id == Config::get('admin.super_admin_id') && $user->getTable() == 'users') ? true : null);
    }
}
