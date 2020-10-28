<?php

$app = include '../bootstrap/index.php';

$route = $app->with('router')->getCurrentRoute();

echo $route->controller;
