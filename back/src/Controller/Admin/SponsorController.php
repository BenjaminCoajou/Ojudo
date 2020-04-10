<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SponsorController extends AbstractController
{
    /**
     * @Route("/sponsor", name="sponsor")
     */
    public function index()
    {
        return $this->render('admin/sponsor/index.html.twig', [
            'controller_name' => 'SponsorController',
        ]);
    }
}
