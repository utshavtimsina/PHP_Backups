<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0a051e980667f8cd254f43bdd05795a3
{
    public static $classMap = array (
        'ElfsightYoutubeGalleryApi\\Core\\Api' => __DIR__ . '/..' . '/elfsight/Api.php',
        'ElfsightYoutubeGalleryApi\\Core\\Cache' => __DIR__ . '/..' . '/elfsight/Cache.php',
        'ElfsightYoutubeGalleryApi\\Core\\Debug' => __DIR__ . '/..' . '/elfsight/Debug.php',
        'ElfsightYoutubeGalleryApi\\Core\\Helper' => __DIR__ . '/..' . '/elfsight/Helper.php',
        'ElfsightYoutubeGalleryApi\\Core\\Options' => __DIR__ . '/..' . '/elfsight/Options.php',
        'ElfsightYoutubeGalleryApi\\Core\\Throttle' => __DIR__ . '/..' . '/elfsight/Throttle.php',
        'ElfsightYoutubeGalleryApi\\Core\\User' => __DIR__ . '/..' . '/elfsight/User.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit0a051e980667f8cd254f43bdd05795a3::$classMap;

        }, null, ClassLoader::class);
    }
}
