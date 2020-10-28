<?php

namespace Wobsite\Core;

/**
 * Application.
 *
 * This is a VERY primitive application container, just something that allows me to put the various "Core" systems
 * into a single place and shuffle around a single object instead of having to worry about multiple objects. In many
 * ways, this is a Singleton object that should be constructed during application bootstrapping and not changed after
 * that's been done.
 */
class Application
{
    private Router $router;

    public function with(string $core)
    {
        return $this->{$core} ?: null;
    }

    /**
     * Add a Router to the Application container.
     *
     * @param  Router  $router
     */
    public function addRouter(Router $router) : void
    {
        $this->router = $router;
    }
}
