<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("api/contact", name="api_contact", methods={"POST"})
     */
    public function index(Request $request,\Swift_Mailer $mailer)
    {
        $message = (new \Swift_Message('Nouveau contact'))
                // On attribue l'expéditeur
                ->setFrom($request['email'])
                // On attribue le destinataire
                ->setTo('ojudo.club@gmail.com')
                
                ->setBody(
                    $request['title'],
                    $request['content'],
                    'text/html'
                ); 
                

            $mailer->send($message);

            
            return $mailer;
    }
    }



       
    
