<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
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
        Gate::before(fn ($user, $ability) => ( $user->getTable() == 'users' && $user->id == env('SUPER_ADMIN_ID')) ? true : null);
    }
}
