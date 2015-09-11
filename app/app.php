<?php
	require_once __DIR__."/../vendor/autoload.php";
	
	$app = new Silex\Application();
	
	$app->register(new Silex\Provider\TwigServiceProvider(), array(
	'twig.path' => __DIR__.'/../views'));
	
	$app->get("/", function() use ($app){
		return $app['twig']->render('converter.twig.html');
	});
	
	$app->get("/find_and_replace", function() use ($app){
		return $app['twig']->render("wordReplayssr.html");
	});
	
	$app->get("/bases", function() use ($app){
		return $app['twig']->render("bases.twig.html");
	});
	
	
	return $app;
?>
	  
