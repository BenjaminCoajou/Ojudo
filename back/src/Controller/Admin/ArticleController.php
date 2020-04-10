<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/admin", name="api_admin_")
 */
class ArticleController extends AbstractController
{
    /**
     * @Route("/articles", name="articles_browse", methods={"GET"})
     */
    public function browse(ArticleRepository $articleRepository, SerializerInterface $serializer)
    {
        // On récupère tout les articles
        $article = $articleRepository->findAll();

        // Serializer sert à normaliser l'objet Article
        $data = $serializer->normalize($article, null, ['groups' => 'admin']);

        return $this->json($data);
    }

    /**
     * @Route("/articles/{id}", name="articles_read", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function read(Article $article, SerializerInterface $serializer)
    {
        return $this->json($serializer->normalize(
            $article,
            null, ['groups' => 'admin']
        ));
    }

    /**
     * @Route("/articles/edit", name="articles_edit", methods={"PATH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("/articles/add", name="articles_add", methods={"POST"})
     */
    public function add()
    {
        
    }

    /**
     * @Route("/articles/{id}/delete", name="articles_delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {

    }
}
