<?php

namespace Wobsite\Core\Router;

use Illuminate\Support\Collection;
use Wobsite\Core\Router;

/**
 * RouteCollection.
 *
 * Nothing special going on here, just extending Illuminate's Collection class here since it's generally amazing.
 * Also adding another method on top as a shortcut to avoid having to "New Route" every time you're defining a
 * route, instead using a method directly on the Collection.
 */
class RouteCollection extends Collection
{
    /**
     * @param  string       $url         The URL (without base URL prefix) to define.
     * @param  string       $controller  The controller that controls this route.
     * @param  string|null  $name        Optional name for this route.
     * @param  string       $method      HTTP method for this route, defaults to GET.
     */
    public function addRoute(string $url, string $controller, string $name = null, string $method = 'GET') : void
    {
        $this->add(new Route($url, $controller, $name, $method));
    }

    /**
     * Create Router Object
     *
     * This is still just a very primitive little thing that will be fleshed out in the future. For now, we're
     * just encapsulating the RouteCollection inside of a Router object, which needs to be populated with the
     * various methods we need later on.
     *
     * @return Router
     */
    public function createRouter() : Router
    {
        return new Router($this); // Just something simple for now.
    }
}
