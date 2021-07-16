<?php

use PhpCsFixer\Finder;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/bootstrap/app.php';

// We use Matt Allan's "Laravel Code Style" as a jumping off point.

$config = new MattAllan\LaravelCodeStyle\Config();

$finder = Finder::create()
    ->in(__DIR__ . '/app')
    ->in(__DIR__ . '/config')
    ->in(__DIR__ . '/database')
    ->in(__DIR__ . '/routes')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

$rules = [
    '@Laravel'                     => true,
    '@Laravel:risky'               => true,
    'binary_operator_spaces'       => [
        'default'   => 'single_space',
        'operators' => [
            '=>' => 'align_single_space',
        ],
    ],
    'blank_line_before_statement'  => ['statements' => ['for', 'if', 'return']],
    'braces'                       => [
        'allow_single_line_closure' => true,
    ],
    'class_attributes_separation'  => [
        'elements' => [
            'const'    => 'one',
            'method'   => 'one',
            'property' => 'one',
        ],
    ],
    'combine_consecutive_issets'   => true,
    'combine_consecutive_unsets'   => true,
    'concat_space'                 => [
        'spacing' => 'one',
    ],
    'fully_qualified_strict_types' => true,
    'function_declaration'         => [
        'closure_function_spacing' => 'one',
    ],
    'function_to_constant'         => [
        'functions' => ['get_called_class', 'get_class', 'get_class_this', 'php_sapi_name', 'phpversion', 'pi'],
    ],
    'linebreak_after_opening_tag'  => true,
    'echo_tag_syntax'              => ['format' => 'long'],
    'no_superfluous_phpdoc_tags'   => true,
    'no_unused_imports'            => true,
    'no_useless_else'              => true,
    'no_useless_return'            => true,
    'ordered_imports'              => ['sort_algorithm' => 'alpha'],
    'phpdoc_no_empty_return'       => true,
    'phpdoc_separation'            => true,
    'return_assignment'            => true,
    'return_type_declaration'      => ['space_before' => 'one'],
    'short_scalar_cast'            => true,
    'simplified_if_return'         => true,
    'simplified_null_return'       => true,
    'strict_comparison'            => true,
    'ternary_to_null_coalescing'   => true,
    'use_arrow_functions'          => true,
    'void_return'                  => true,
];

// Finally, we return the configuration.

return $config
    ->setFinder($finder)
    ->setRules($rules)
    ->setRiskyAllowed(true);
