<?php

namespace Wobsite\Core\Router;

class Route
{
    public string $url;

    public string $controller;

    public ?string $name;

    public string $method;

    public function __construct(string $url, string $controller, string $name = null, string $method = 'GET')
    {
        $this->url = $this->formatUrl($url);
        $this->controller = $controller;
        $this->name = $name;
        $this->method = $method;
    }

    protected function formatUrl(string $url) : string
    {
        $url = trim($url);

        if ($url === '') {
            $url = '/';
        }

        if ($url[0] !== '/') {
            $url = '/' . $url;
        }

        if (substr($url, -1) !== '/') {
            $url .= '/';
        }

        return $url;
    }

}
