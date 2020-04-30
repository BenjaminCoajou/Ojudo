<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{

    /**
     * @Route("api/contact", name="api_contact", methods={"POST"})
     */
    public function index(Request $request, MailerInterface $mailer)
{
        

    $contactFormData = $request->getContent();

// Create a message
    $message = (new Email())
            ->From($contactFormData('email'))
            ->To('ojudo.club@gmail.com')
            ->subject($contactFormData('title'))
            ->text($contactFormData('content'));
             
            $mailer->send($message);
                
     
 }
}