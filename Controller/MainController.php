<?php

/*
 * This file is part of the SkreenHouseFactorytvBundle package.
 *
 * (c) Brickstorm <http://brickstorm.org/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SkreenHouseFactory\gtvBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use SkreenHouseFactory\gtvBundle\Api\ApiManager;

class MainController extends Controller
{
    /**
    *
    */
    public function gtvAction(Request $request)
    {

      $response = $this->render('SkreenHouseFactoryTvBundle:Main:splash.html.twig', array(
        'device' => array('head'   => 'SkreenHouseFactoryGtvBundle:Gtv:_head.html.twig',
                          'script' => 'SkreenHouseFactoryGtvBundle:Gtv:_script.html.twig')
      ));
      /*$response->headers->set('Access-Control-Allow-Origin', '*');
      $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      $response->headers->set('Access-Control-Allow-Headers', 'X-Requested-With');

      $response->setPublic();
      $response->setMaxAge(3600);
      $response->headers->addCacheControlDirective('must-revalidate', true);
      */

      return $response;
    }
}