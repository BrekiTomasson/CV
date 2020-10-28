<?php

use Wobsite\Core\Application;
use Wobsite\Core\Router\RouteCollection;

require_once __DIR__ . '/../vendor/autoload.php';

/**
 * ============================================================================
 * = APPLICATION CONTAINER
 * ============================================================================
 * The Application container is just something where we can put the various
 * "core" systems that will be used later on, allowing us to pass just a
 * single object back with everything we need. This should not be modified
 * further after bootstrapping is done, if it can be avoided.
 */
$app = new Application();

/**
 * ============================================================================
 * = ROUTES AND ROUTE DEFINITION
 * ============================================================================
 * This should probably be broken into its own file once
 * we've got more things being bootstrapped on pageload.
 */
$routes = new RouteCollection();

$routes->addRoute('', 'aController::homePage');
$routes->addRoute('users', 'someController::createUser');
$routes->addRoute('about', 'someOtherController::aboutPage');

$app->addRouter($routes->createRouter());

/**
 * Last, but not least, return the Application Container!
 */

return $app;
