<?php

namespace Wobsite\Core;

use Wobsite\Core\Router\RouteCollection;

class Router
{
    private RouteCollection $routes;

    public function __construct(RouteCollection $routes)
    {
        $this->routes = $routes;
    }

    /**
     * @return ?Route
     */
    public function getCurrentRoute()
    {
        return $this->findRoute($_SERVER['REQUEST_URI']);
    }

    public function findRoute(string $url)
    {
        return $this->routes->where('url', $url)->first() ?: null;
    }

}
