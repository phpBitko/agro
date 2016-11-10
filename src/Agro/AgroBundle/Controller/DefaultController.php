<?php

namespace Agro\AgroBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('AgroBundle:Default:index.html.twig');
    }
}
