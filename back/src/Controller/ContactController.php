<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Swift_Mailer;

class ContactController extends AbstractController
{

    /**
     * @Route("api/contact", name="api_contact", methods={"POST"})
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {
        

        $contactFormData = $request->getContent();

        var_dump($contactFormData);

// Create a message
    $message = (new Swift_Message('Wonderful Subject'))
  ->setFrom($contactFormData('email'))
  ->setTo('ojudo.club@gmail.com')
  ->setBody(
            $this->renderView(
               
                'emails/contact.html.twig',
                ['content' => $request,
                 'title' => $request  
                ]
            ),
            'text/html'
        )
  ;

// Send the message
$this->get('mailer') ->send($message);
    
    } 
}